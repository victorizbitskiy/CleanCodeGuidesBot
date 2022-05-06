### Pointers in Go

#### Pointer Mutability

We've already looked at the problem of mutability in the context of globally or largely scoped variables. However, mutability is not necessarily always a bad thing, and I am by no means an advocate for writing 100% pure functional programs. Mutability is a powerful tool, but we should really only ever use it when it's necessary. Let's have a look at a code example illustrating why:

```go
func (store *UserStore) Insert(user *User) error {
    if store.userExists(user.ID) {
        return ErrItemAlreaydExists
    }
    store.users[user.ID] = user
    return nil
}

func (store *UserStore) userExists(id int64) bool {
    _, ok := store.users[id]
    return ok
}
```

At first glance, this doesn't seem too bad. In fact, it might even seem like a rather simple insert function for a common list structure. We accept a pointer as input, and if no other users with this `id` exist, then we insert the provided user pointer into our list. Then, we use this functionality in our public API for creating new users:

```go
func CreateUser(w http.ResponseWriter, r *http.Request) {
    user, err := parseUserFromRequest(r)
    if err != nil {
        http.Error(w, err, http.StatusBadRequest)
        return
    }
    if err := insertUser(w, user); err != nil {
      http.Error(w, err, http.StatusInternalServerError)
      return
    }
}

func insertUser(w http.ResponseWriter, user User) error {
  	if err := store.Insert(user); err != nil {
        return err
    }
  	user.Password = ""
	  return json.NewEncoder(w).Encode(user)
}
```

Once again, at first glance, everything looks fine. We parse the user from the received request and insert the user struct into our store. Once we have successfully inserted our user into the store, we then set the password to be an empty string before returning the user as a JSON object to our client. This is all quite common practice, typically when returning a user object whose password has been hashed, since we don't want to return the hashed password.

However, imagine that we are using an in-memory store based on a `map`. This code will produce some unexpected results. If we check our user store, we'll see that the change we made to the users password in the HTTP handler function also affected the object in our store. This is because the pointer address returned by `parseUserFromRequest` is what we populated our store with, rather than an actual value. Therefore, when making changes to the dereferenced password value, we end up changing the value of the object we are pointing to in our store.

This is a great example of why both mutability and variable scope can cause some serious issues and bugs when used incorrectly. When passing pointers as an input parameter of a function, we are expanding the scope of the variable whose data is being pointed to. Even more worrying is the fact that we are expanding the scope to an undefined level. We are *almost* expanding the scope of the variable to the global level. As demonstrated by the above example, this can lead to disastrous bugs that are particularly difficult to find and eradicate.

Fortunately, the fix for this is rather simple:

```go
func (store *UserStore) Insert(user User) error {
    if store.userExists(user.ID) {
        return ErrItemAlreaydExists
    }
    store.users[user.ID] = &user
    return nil
}
```

Instead of passing a pointer to a `User` struct, we are now passing in a copy of a `User`. We are still storing a pointer to our store; however, instead of storing the pointer from outside of the function, we are storing the pointer to the copied value, whose scope is inside the function. This fixes the immediate problem but might still cause issues further down the line if we aren't careful. Consider this code:

```go
func (store *UserStore) Get(id int64) (*User, error) {
    user, ok := store.users[id]
    if !ok {
        return EmptyUser, ErrUserNotFound
    }
    return store.users[id], nil
}
```

This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article#pointer-mutability)
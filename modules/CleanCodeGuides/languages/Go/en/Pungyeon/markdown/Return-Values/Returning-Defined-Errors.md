### Return Values

#### Returning Defined Errors

We'll start things off nice and easy by describing a cleaner way to return errors. As we discussed earlier, our main goal with writing clean code is to ensure readability, testability, and maintainability of the codebase. The technique for returning errors that we'll discuss here will achieve all three of those goals with very little effort.

Let's consider the normal way to return a custom error. This is a hypothetical example taken from a thread-safe map implementation that we've named `Store`:

```go
package smelly

func (store *Store) GetItem(id string) (Item, error) {
    store.mtx.Lock()
    defer store.mtx.Unlock()

    item, ok := store.items[id]
    if !ok {
        return Item{}, errors.New("item could not be found in the store") 
    }
    return item, nil
}
```

There is nothing inherently smelly about this function when we consider it in isolation. We look into the `items` map of our `Store` struct to see if we already have an item with the given `id`. If we do, we return it; otherwise, we return an error. Pretty standard. So, what is the issue with returning custom errors as string values? Well, let's look at what happens when we use this function inside another package:

```go
func GetItemHandler(w http.ReponseWriter, r http.Request) {
    item, err := smelly.GetItem("123")
    if err != nil {
        if err.Error() == "item could not be found in the store" {
            http.Error(w, err.Error(), http.StatusNotFound)
	        return
        }
        http.Error(w, errr.Error(), http.StatusInternalServerError)
        return
    } 
    json.NewEncoder(w).Encode(item)
}
```

This is actually not too bad. However, there is one glaring problem: An error in Go is simply an `interface` that implements a function \(`Error()`\) returning a string; thus, we are now hardcoding the expected error code into our codebase, which isn't ideal. This hardcoded string is known as a *magic string*. And its main problem is flexibility: If at some point we decide to change the string value used to represent an error, our code will break \(softly\) unless we update it in possibly many different places. Our code is tightly coupled – it relies on that specific magic string and the assumption that it will never change as the codebase grows.

An even worse situation would arise if a client were to use our package in their own code. Imagine that we decided to update our package and changed the string that represents an error – the client's software would now suddenly break. This is quite obviously something that we want to avoid. Fortunately, the fix is very simple:

```go
package clean

var (
    NullItem = Item{}

    ErrItemNotFound = errors.New("item could not be found in the store") 
)

func (store *Store) GetItem(id string) (Item, error) {
    store.mtx.Lock()
    defer store.mtx.Unlock()

    item, ok := store.items[id]
    if !ok {
        return NullItem, ErrItemNotFound
    }
    return item, nil
}
```

This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article#Returning-Defined-Errors)
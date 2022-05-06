### The Empty `interface{}`
Unlike other languages, Go does not have an implementation for generics. There have been many proposals for one, but all have been turned down by the Go language team. Unfortunately, without generics, developers must try to find creative alternatives, which very often involves using the empty `interface{}`. This section describes why these often *too* creative implementations should be considered bad practice and unclean code. There will also be examples of appropriate usage of the empty `interface{}` and how to avoid some pitfalls of writing code with it.

As mentioned in a previous section, Go determines whether a concrete type implements a particular interface by checking whether the type implements the *methods* of that interface. So what happens if our interface declares no methods, as is the case with the empty interface?

```go
type EmptyInterface interface {}
```

The above is equivalent to the built-in type `interface{}`. A natural consequence of this is that we can write generic functions that accept any type as arguments. This is extremely useful for certain kinds of functions, such as print helpers. Interestingly, this is actually what makes it possible to pass in any type to the `Println` function from the `fmt` package:

```go
func Println(v ...interface{}) {
    ...
}
```

In this case, `Println` isn't just accepting a single `interface{}`; rather, the function accepts a *slice* of types that implement the empty `interface{}`. As there are no methods associated with the empty `interface{}`, *all* types are accepted, even making it possible to feed `Println` with a slice of different types. This is a very common pattern when handling string conversion \(both from and to a string\). Good examples of this come from the `json` standard library package:

```go
func InsertItemHandler(w http.ResponseWriter, r *http.Request) {
    var item Item
    if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    if err := db.InsertItem(item); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    w.WriteHeader(http.StatsOK)
}
```

All the less elegant code is contained within the `Decode` function. Thus, developers using this functionality won't have to worry about type reflection or type casting; we just have to worry about providing a pointer to a concrete type. This is good because the `Decode()` function is technically returning a concrete type. We are passing in our `Item` value, which will be populated from the body of the HTTP request. This means we won't have to deal with the potential risks of handling the `interface{}` value ourselves.

However, even when using the empty `interface{}` with good programming practices, we still have some issues. If we pass in a JSON string that has nothing to do with our `Item` type but is still valid JSON, we won't receive an error - our `item` variable will just be left with the default values. So, while we don't have to worry about reflection and casting errors, we will still have to make sure that the message sent from our client is a valid `Item` type. Unfortunately, as of writing this document, there is no simple or good way to implement these types of generic decoders without using the empty `interface{}` type.

The problem with using `interface{}` in this manner is that we are leaning towards using Go, a statically typed language, as a dynamically typed language. This becomes even clearer when looking at poor implementations of the `interface{}` type. The most common example of this comes from developers trying to implement a generic store or list of some sort.

This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article/blob/master/README.md#the-empty-interface)
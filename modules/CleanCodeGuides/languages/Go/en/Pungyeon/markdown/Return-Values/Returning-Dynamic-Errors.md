### Return Values

#### Returning Dynamic Errors

There are certainly some scenarios where returning an error variable might not actually be viable. In cases where the information in customised errors is dynamic, if we want to describe error events more specifically, we can no longer define and return our static errors. Here's an example:

```go
func (store *Store) GetItem(id string) (Item, error) {
    store.mtx.Lock()
    defer store.mtx.Unlock()

    item, ok := store.items[id]
    if !ok {
        return NullItem, fmt.Errorf("Could not find item with ID: %s", id)
    }
    return item, nil
}
```

So, what to do? There is no well-defined or standard method for handling and returning these kinds of dynamic errors. My personal preference is to return a new interface, with a bit of added functionality:

```go
type ErrorDetails interface {
    Error() string
    Type() string
}

type errDetails struct {
    errtype error
    details interface{}
}

func NewErrorDetails(err error, details ...interface{}) ErrorDetails {
    return &errDetails{
        errtype: err,
        details: details,
    }
}

func (err *errDetails) Error() string {
    return fmt.Sprintf("%v: %v", err.errtype, err.details)
}

func (err *errDetails) Type() error {
    return err.errtype
}
```

This new data structure still works as our standard error. We can still compare it to `nil` since it's an interface implementation, and we can still call `.Error()` on it, so it won't break any existing implementations. However, the advantage is that we can now check our error type as we could previously, despite our error now containing the *dynamic* details:

```go
func (store *Store) GetItem(id string) (Item, error) {
    store.mtx.Lock()
    defer store.mtx.Unlock()

    item, ok := store.items[id]
    if !ok {
        return NullItem, NewErrorDetails(
            ErrItemNotFound,
            fmt.Sprintf("could not find item with id: %s", id))
    }
    return item, nil
}
```

And our HTTP handler function can then be refactored to check for a specific error again:

```go
func GetItemHandler(w http.ReponseWriter, r http.Request) {
    item, err := clean.GetItem("123")
    if err != nil {
        if errors.Is(err.Type(), clean.ErrItemNotFound) {
            http.Error(w, err.Error(), http.StatusNotFound)
	        return
        }
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    } 
    json.NewEncoder(w).Encode(item)
}
```
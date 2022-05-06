### Nil Values 

A controversial aspect of Go is the addition of `nil`. This value corresponds to the value `NULL` in C and is essentially an uninitialised pointer. We've already seen some of the problems that `nil` can cause, but to sum up: Things break when you try to access methods or properties of a `nil` value. Thus, it's recommended to avoid returning a  `nil` value when possible. This way, the users of our code are less likely to accidentally access `nil` values. 

There are other scenarios in which it is common to find `nil` values that can cause some unnecessary pain. An example of this is incorrectly initialising a `struct` \(as in the example below\), which can lead to it containing `nil` properties. If accessed, those `nil`s will cause a panic.

```go
type App struct {
	Cache *KVCache
}

type KVCache struct {
  mtx sync.RWMutex
	store map[string]string
}

func (cache *KVCache) Add(key, value string) {
  cache.mtx.Lock()
  defer cache.mtx.Unlock()
  
	cache.store[key] = value
}
```

This code is absolutely fine. However, the danger is that our `App` can be initialised incorrectly, without initialising the `Cache` property within. Should the following code be invoked, our application will panic:

```go
	app := App{}
	app.Cache.Add("panic", "now")
```

The `Cache` property has never been initialised and is therefore a `nil` pointer. Thus, invoking the `Add` method like we did here will cause a panic, with the following message:

> panic: runtime error: invalid memory address or nil pointer dereference

Instead, we can turn the `Cache` property of our `App` structure into a private property and create a getter-like method to access it. This gives us more control over what we are returning; specifically, it ensures that we aren't returning a `nil` value:

```go
type App struct {
    cache *KVCache
}

func (app *App) Cache() *KVCache {
	if app.cache == nil {
        app.cache = NewKVCache()
	}
	return app.cache
}
```

The code that previously panicked will now be refactored to the following:

```go
app := App{}
app.Cache().Add("panic", "now")
```

This ensures that users of our package don't have to worry about the implementation and whether they're using our package in an unsafe manner. All they need to worry about is writing their own clean code.

> NOTE: There are other methods of achieving a similarly safe outcome. However, I believe this is the most straightforward approach.
### Closures Are Function Pointers

Before we get into the next topic of using interfaces in Go, I would like to introduce a common alternative. It's what C programmers know as "function pointers" and what most other programming languages call *closures*. A closure is simply an input parameter like any other, except it represents \(points to\) a function that can be invoked. In JavaScript, it's quite common to use closures as callbacks, which are just functions that are invoked after some asynchronous operation has finished. In Go, we don't really have this notion. We can, however, use closures to partially overcome a different hurdle: The lack of generics.

Consider the following function signature:

```go
func something(closure func(float64) float64) float64 { ... }
```

Here, `something` takes another function \(a closure\) as input and returns a `float64`. The input function takes a `float64` as input and also returns a `float64`. This pattern can be particularly useful for creating a loosely coupled architecture, making it easier to to add functionality without affecting other parts of the code. Suppose we have a struct containing data that we want to manipulate in some form. Through this structure's `Do()` method, we can perform operations on that data. If we know the operation ahead of time, we can obviously handle that logic directly in our `Do()` method:

```go
func (datastore *Datastore) Do(operation Operation, data []byte) error {
  switch(operation) {
  case COMPARE:
    return datastore.compare(data)
  case CONCAT:
    return datastore.add(data)
  default:
    return ErrUnknownOperation
  }
}
```

But as you can imagine, this function is quite rigid - it performs a predetermined operation on the data contained in the `Datastore` struct. If at some point we would like to introduce more operations, we'd end up bloating our `Do` method with quite a lot of irrelevant logic that would be hard to maintain. The function would have to always care about what operation it's performing and to cycle through a number of nested options for each operation. It might also be an issue for developers wanting to use our `Datastore` object who don't have access to edit our package code, since there is no way of extending structure methods in Go as there is in most OOP languages.

So instead, let's try a different approach using closures:

```go
func (datastore *Datastore) Do(operation func(data []byte, data []byte) ([]byte, error), data []byte) error {
  result, err := operation(datastore.data, data)
  if err != nil {
    return err
  }
  datastore.data = result
  return nil
}

func concat(a []byte, b []byte) ([]byte, error) {
  ...
}

func main() {
  ...
  datastore.Do(concat, data)
  ...
}
```

You'll notice immediately that the function signature for `Do` ends up being quite messy. We also have another issue: The closure isn't particularly generic. What happens if we find out that we actually want the `concat` to be able to take more than just two byte arrays as input? Or if we want to add some completely new functionality that may also need more or fewer input values than `\(data []byte, data []byte\)`?

One way to solve this issue is to change our `concat` function. In the example below, I have changed it to only take a single byte array as an input argument, but it could just as well have been the opposite case:

```go
func concat(data []byte) func(data []byte) ([]byte, error) {
  return func(concatting []byte) ([]byte, error) {
    return append(data, concatting), nil
  }
}

func (datastore *Datastore) Do(operation func(data []byte) ([]byte, error)) error {
  result, err := operation(datastore.data)
  if err != nil {
    return err
  }
  datastore.data = result
  return nil
}

func main() {
  ...
  datastore.Do(compare(data))
  ...
}
```

Notice how we've effectively moved some of the clutter out of the `Do` method signature and into the `concat` method signature...

This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article#Closures-are-Function-Pointers)
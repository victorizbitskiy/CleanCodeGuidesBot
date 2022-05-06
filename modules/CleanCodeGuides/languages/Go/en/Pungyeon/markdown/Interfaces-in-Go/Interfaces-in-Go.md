### Interfaces in Go

In general, Go's approach to handling `interface`s is quite different from those of other languages. Interfaces aren't explicitly implemented like they would be in Java or C#; rather, they are implicitly created if they fulfill the contract of the interface. As an example, this means that any `struct` that has an `Error()` method implements \(or "fulfills"\) the `Error` interface and can be returned as an `error`. This manner of implementing interfaces is extremely easy and makes Go feel more fast paced and dynamic.

However, there are certainly disadvantages with this approach. As the interface implementation is no longer explicit, it can be difficult to see which interfaces are implemented by a struct. Therefore, it's common to define interfaces with as few methods as possible; this makes it easier to understand whether a particular struct fulfills the contract of the interface.

An alternative is to create constructors that return an interface rather than the concrete type:

```go
type Writer interface {
	Write(p []byte) (n int, err error)
}

type NullWriter struct {}

func (writer *NullWriter) Write(data []byte) (n int, err error) {
    // do nothing
    return len(data), nil
}

func NewNullWriter() io.Writer {
    return &NullWriter{}
}
```

The above function ensures that the `NullWriter` struct implements the `Writer` interface. If we were to delete the `Write` method from `NullWriter`, we would get a compilation error. This is a good way of ensuring that our code behaves as expected and that we can rely on the compiler as a safety net in case we try to write invalid code.

In certain cases, it might not be desirable to write a constructor, or perhaps we would like for our constructor to return the concrete type, rather than the interface. As an example, the `NullWriter` struct has no properties to populate on initialisation, so writing a constructor is a little redundant. Therefore, we can use the less verbose method of checking interface compatibility:

```go
type Writer interface {
	Write(p []byte) (n int, err error)
}

type NullWriter struct {}
var _ io.Writer = &NullWriter{}
```

In the above code, we are initialising a variable with the Go `blank identifier`, with the type assignment of `io.Writer`. This results in our variable being checked to fulfill the `io.Writer` interface contract, before being discarded. This method of checking interface fulfillment also makes it possible to check that several interface contracts are fulfilled:

```go
type NullReaderWriter struct{}
var _ io.Writer = &NullWriter{}
var _ io.Reader = &NullWriter{}
```

From the above code, it's very easy to understand which interfaces must be fulfilled; this ensures that the compiler will help us out during compile time. Therefore, this is generally the preferred solution for checking interface contract fulfillment.

There's yet another method of trying to be more explicit about which interfaces a given struct implements. However, this third method actually achieves the opposite of what we want. It involves using embedded interfaces as a struct property.

> <em>Wait what? – Presumably most people</em>

This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article/blob/master/README.md#interfaces-in-go)
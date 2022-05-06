### Variable Declaration 

Other than avoiding issues with variable scope and mutability, we can also improve readability by declaring variables as close to their usage as possible. In C programming, it's common to see the following approach to declaring variables:

```go
func main() {
  var err error
  var items []Item
  var sender, receiver chan Item
  
  items = store.GetItems()
  sender = make(chan Item)
  receiver = make(chan Item)
  
  for _, item := range items {
    ...
  }
}
```

This suffers from the same symptom as described in our discussion of variable scope. Even though these variables might not actually be reassigned at any point, this kind of coding style keeps the readers on their toes, in all the wrong ways. Much like computer memory, our brain's short-term memory has a limited capacity. Having to keep track of which variables are mutable and whether or not a particular fragment of code will mutate them makes it more difficult to understand what the code is doing. Figuring out the eventually returned value can be a nightmare. Therefore, to makes this easier for our readers \(and our future selves\), it's recommended that you declare variables as close to their usage as possible:

```go
func main() {
	var sender chan Item
	sender = make(chan Item)

	go func() {
		for {
			select {
			case item := <-sender:
				// do something
			}
		}
	}()
}
```

This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article/blob/master/README.md#variable-declaration)
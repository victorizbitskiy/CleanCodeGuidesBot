### Cleaning Functions

#### Function Signatures

Creating a good function naming structure makes it easier to read and understand the intent of the code. As we saw above, making our functions shorter helps us understand the function's logic. The last part of cleaning our functions involves understanding the context of the function input. With this comes another easy-to-follow rule: *Function signatures should only contain one or two input parameters*. In certain exceptional cases, three can be acceptable, but this is where we should start considering a refactor. Much like the rule that our functions should only be 5–8 lines long, this can seem quite extreme at first. However, I feel that this rule is much easier to justify.

Take the following function from [RabbitMQ's introduction tutorial to its Go library](https://www.rabbitmq.com/tutorials/tutorial-one-go.html):

```go
q, err := ch.QueueDeclare(
  "hello", // name
  false,   // durable
  false,   // delete when unused
  false,   // exclusive
  false,   // no-wait
  nil,     // arguments
)
```

The function `QueueDeclare` takes six input parameters, which is quite a lot. With some effort, it's possible to understand what this code does thanks to the comments. However, the comments are actually part of the problem–as mentioned earlier, they should be substituted with descriptive code whenever possible. After all, there's nothing preventing us from invoking the `QueueDeclare` function _without_ comments:

```go
q, err := ch.QueueDeclare("hello", false, false, false, false, nil)
```

Now, without looking at the commented version, try to remember what the fourth and fifth `false` arguments represent. It's impossible, right? You will inevitably forget at some point. This can lead to costly mistakes and bugs that are difficult to correct. The mistakes might even occur through incorrect comments–imagine labeling the wrong input parameter. Correcting this mistake will be unbearably difficult to correct, especially when familiarity with the code has deteriorated over time or was low to begin with. Therefore, it is recommended to replace these input parameters with an 'Options' `struct` instead:

```go
type QueueOptions struct {
    Name string
    Durable bool
    DeleteOnExit bool
    Exclusive bool
    NoWait bool
    Arguments []interface{} 
}

q, err := ch.QueueDeclare(QueueOptions{
    Name: "hello",
    Durable: false,
    DeleteOnExit: false,
    Exclusive: false,
    NoWait: false,
    Arguments: nil,
})
```
This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article/blob/master/README.md#function-signatures)
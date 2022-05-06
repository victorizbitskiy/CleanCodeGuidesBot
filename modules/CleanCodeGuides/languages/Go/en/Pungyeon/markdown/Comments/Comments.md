###  Naming Conventions

#### Comments

I'd like to first address the topic of commenting code, which is an essential practice but tends to be misapplied. Unnecessary comments can indicate problems with the underlying code, such as the use of poor naming conventions. However, whether or not a particular comment is "necessary" is somewhat subjective and depends on how legibly the code was written. For example, the logic of well-written code may still be so complex that it requires a comment to clarify what is going on. In that case, one might argue that the comment is _helpful_ and therefore necessary.

In Go, according to `gofmt`, _all_ public variables and functions should be annotated. I think this is absolutely fine, as it gives us consistent rules for documenting our code. However, I always want to distinguish between comments that enable auto-generated documentation and _all other_ comments. Annotation comments, for documentation, should be written like documentation — they should be at a high level of abstraction and concern the logical implementation of the code as little as possible.

I say this because there are other ways to explain code and ensure that it's being written comprehensibly and expressively. If the code is neither of those, some people find it acceptable to introduce a comment explaining the convoluted logic. Unfortunately, that doesn't really help. For one, most people simply won't read comments, as they tend to be very intrusive to the experience of reviewing code. Additionally, as you can imagine, a developer won't be too happy if they're forced to review unclear code that's been slathered with comments. The less that people have to read to understand what your code is doing, the better off they'll be.

Let's take a step back and look at some concrete examples. Here's how you _shouldn't_ comment your code:

```go
// iterate over the range 0 to 9 
// and invoke the doSomething function
// for each iteration
for i := 0; i < 10; i++ {
  doSomething(i)
}
```

This is what I like to call a *tutorial comment*; it's fairly common in tutorials, which often explain the low-level functionality of a language \(or programming in general\). While these comments may be helpful for beginners, they're absolutely useless in production code. Hopefully, we aren't collaborating with programmers who don't understand something as simple as a looping construct by the time they've begun working on a development team. As programmers, we shouldn't have to read the comment to understand what's going on — we know that we're iterating over the range 0 to 9 because we can simply read the code. Hence the proverb:

> _Document why, not how. — Venkat Subramaniam_

Following this logic, we can now change our comment to explain _why_ we are iterating from the range 0 to 9:

```go
// instatiate 10 threads to handle upcoming work load
for i := 0; i < 10; i++ {
  doSomething(i)
}
```

Now we understand _why_ we have a loop and can tell _what_ we're doing by simply reading the code... Sort of.

This still isn't what I'd consider clean code. The comment is worrying because it probably should not be necessary to express such an explanation in prose, assuming the code is well written \(which it isn't\). Technically, we're still saying what we're doing, not why we're doing it. We can easily express this "what" directly in our code by using more meaningful names:

```go
for workerID := 0; workerID < 10; workerID++ {
  instantiateThread(workerID)
}
```
This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article#Comments)
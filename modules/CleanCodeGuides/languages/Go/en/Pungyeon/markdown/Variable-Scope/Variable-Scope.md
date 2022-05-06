### Variable Scope
Now, let's take a step back and revisit the idea of writing smaller functions. This has another nice side effect that we didn't cover in the previous chapter: Writing smaller functions can typically eliminate reliance on mutable variables that leak into the global scope.

Global variables are problematic and don't belong in clean code; they make it very difficult for programmers to understand the current state of a variable. If a variable is global and mutable, then by definition, its value can be changed by any part of the codebase. At no point can you guarantee that this variable is going to be a specific value... And that's a headache for everyone. This is yet another example of a trivial problem that's exacerbated when the codebase expands.

Let's look at a short example of how non-global variables with a large scope can cause problems. These variables also introduce the issue of *variable shadowing*, as demonstrated in the code taken from an article titled [Golang scope issue](https://idiallo.com/blog/golang-scopes):

```go
func doComplex() (string, error) {
    return "Success", nil
}

func main() {
    var val string
    num := 32

    switch num {
    case 16:
    // do nothing
    case 32:
        val, err := doComplex()
        if err != nil {
            panic(err)
        }
        if val == "" {
            // do something else
        }
    case 64:
        // do nothing
    }

    fmt.Println(val)
}
```

What's the problem with this code? From a quick skim, it seems the `var val string` value should be printed out as `Success` by the end of the `main` function. Unfortunately, this is not the case. The reason for this lies in the following line:

```go
val, err := doComplex()
```

This declares a new variable `val` in the switch's `case 32` scope and has nothing to do with the variable declared in the first line of `main`. Of course, it can be argued that Go syntax is a little tricky, which I don't necessarily disagree with, but there is a much worse issue at hand. The declaration of `var val string` as a mutable, largely scoped variable is completely unnecessary. If we do a *very* simple refactor, we will no longer have this issue:

```go
func getStringResult(num int) (string, error) {
    switch num {
    case 16:
    // do nothing
    case 32:
       return doComplex()
    case 64:
        // do nothing
    }
    return "", nil
}

func main() {
    val, err := getStringResult(32)
    if err != nil {
        panic(err)
    }
    if val == "" {
        // do something else
    }
    fmt.Println(val)
}
```

After our refactor, `val` is no longer modified, and the scope has been reduced. Again, keep in mind that these functions are very simple. Once this kind of code style becomes a part of larger, more complex systems, it can be impossible to figure out why errors are occurring. We don't want this to happen—not only because we generally dislike software errors but also because it's disrespectful to our colleagues, and ourselves; we are potentially wasting each other's time having to debug this type of code. Developers need to take responsibility for their own code rather than blaming these issues on the variable declaration syntax of a particular language like Go.

On a side note, if the `// do something else` part is another attempt to mutate the `val` variable, we should extract that logic out as its own self-contained function, as well as the previous part of it. This way, instead of expanding the mutable scope of our variables, we can just return a new value:

```go
func getVal(num int) (string, error) {
    val, err := getStringResult(num)
    if err != nil {
        return "", err
    }
    if val == "" {
        return NewValue() // pretend function
    }
}

func main() {
    val, err := getVal(32)
    if err != nil {
        panic(err)
    }
    fmt.Println(val)
}
```
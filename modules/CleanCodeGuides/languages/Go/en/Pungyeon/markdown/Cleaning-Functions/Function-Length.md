### Cleaning Functions

Now that we know some best practices for naming our variables and functions, as well as clarifying our code with comments, let's dive into some specifics of how we can refactor functions to make them cleaner.

#### Function Length

> _How small should a function be? Smaller than that! – Robert C. Martin_

When writing clean code, our primary goal is to make our code easily digestible. The most effective way to do this is to make our functions as short as possible. It's important to understand that we don't necessarily do this to avoid code duplication. The more important reason is to improve _code comprehension_.

It can help to look at a function's description at a very high level to understand this better:

```
fn GetItem:
    - parse json input for order id
    - get user from context
    - check user has appropriate role
    - get order from database
```

By writing short functions \(which are typically 5–8 lines in Go\), we can create code that reads almost as naturally as our description above:

```go
var (
    NullItem = Item{}
    ErrInsufficientPrivileges = errors.New("user does not have sufficient privileges")
)

func GetItem(ctx context.Context, json []bytes) (Item, error) {
    order, err := NewItemFromJSON(json)
    if err != nil {
        return NullItem, err
    }
    if !GetUserFromContext(ctx).IsAdmin() {
	      return NullItem, ErrInsufficientPrivileges
    }
    return db.GetItem(order.ItemID)
}
```
This segment is too long for Telegram message.
Please, read more on [GitHub](https://github.com/Pungyeon/clean-go-article/blob/master/README.md#Function-Length)
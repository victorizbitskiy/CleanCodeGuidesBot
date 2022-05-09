## Methods

### Avoid Side Effects \(part 2\)

In Ruby, everything is an object and everything is passed by value, but these values are references to objects. In the case of objects and arrays, if your method makes a change
in a shopping cart array, for example, by adding an item to purchase,
then any other method that uses that `cart` array will be affected by this
addition. That may be great, however it can be bad too. Let's imagine a bad
situation:

The user clicks the "Purchase", button which calls a `purchase` method that
spawns a network request and sends the `cart` array to the server. Because
of a bad network connection, the `purchase` method has to keep retrying the
request. Now, what if in the meantime the user accidentally clicks "Add to Cart"
button on an item they don't actually want before the network request begins?
If that happens and the network request begins, then that purchase method
will send the accidentally added item because it has a reference to a shopping
cart array that the `add_item_to_cart` method modified by adding an unwanted
item.

A great solution would be for the `add_item_to_cart` to always clone the `cart`,
edit it, and return the clone. This ensures that no other methods that are
holding onto a reference of the shopping cart will be affected by any changes.

Two caveats to mention to this approach:
  1. There might be cases where you actually want to modify the input object,
but when you adopt this programming practice you will find that those cases
are pretty rare. Most things can be refactored to have no side effects!

  2. Cloning big objects can be very expensive in terms of performance. Luckily,
this isn't a big issue in practice because there are
[great gems](https://github.com/hamstergem/hamster) that allow
this kind of programming approach to be fast and not as memory intensive as
it would be for you to manually clone objects and arrays.

**Bad:**

```ruby
def add_item_to_cart(cart, item)
  cart.push(item: item, time: Time.now)
end
```

**Good:**

```ruby
def add_item_to_cart(cart, item)
  cart + [{ item: item, time: Time.now }]
end
```
## **Objects and Data Structures**
### Use getters and setters

Using getters and setters to access data on objects could be better than simply
looking for a property on an object. "Why?" you might ask. Well, here's an
unorganized list of reasons why:

* When you want to do more beyond getting an object property, you don't have
to look up and change every accessor in your codebase.
* Makes adding validation simple when doing a `set`.
* Encapsulates the internal representation.
* Easy to add logging and error handling when getting and setting.
* You can lazy load your object's properties, let's say getting it from a
server.


**Bad:**
```ruby
def make_bank_account
  # ...

  {
    balance: 0
    # ...
  }
end

account = make_bank_account
account[:balance] = 100
account[:balance] # => 100
```

**Good:**
```ruby
class BankAccount
  def initialize
    # this one is private
    @balance = 0
  end

  # a "getter" via a public instance method
  def balance
    # do some logging
    @balance
  end

  # a "setter" via a public instance method
  def balance=(amount)
    # do some logging
    # do some validation
    @balance = amount
  end
end

account = BankAccount.new
account.balance = 100
account.balance # => 100
```

Alternatively, if your getters and setters are absolutely trivial, you should use `attr_accessor` to define them. This is especially convenient for implementing data-like objects which expose data to other parts of the system \(e.g., ActiveRecord objects, response wrappers for remote APIs\).

**Good:**
```ruby
class Toy
  attr_accessor :price
end

toy = Toy.new
toy.price = 50
toy.price # => 50
```

However, you have to be aware that in some situations, using `attr_accessor` is a code smell, read more [here](https://solnic.codes/2012/04/04/get-rid-of-that-code-smell-attributes).

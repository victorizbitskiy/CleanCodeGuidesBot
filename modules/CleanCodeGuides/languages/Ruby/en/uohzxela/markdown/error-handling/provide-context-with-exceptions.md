## **Error Handling**
Thrown errors are a good thing! They mean the runtime has successfully
identified when something in your program has gone wrong and it's letting
you know by stopping method execution on the current stack, killing the
process, and notifying you in the logs with a stack trace.

### Provide context with exceptions
Use a descriptive error class name and a message when you raise an error. That way you know why the error occurred and you can rescue the specific type of error.

***Bad:***
```ruby
def initialize(user)
  fail unless user
  ...
end
```

***Good:***
```ruby
def initialize(user)
  fail ArgumentError, 'Missing user' unless user
  ...
end
```
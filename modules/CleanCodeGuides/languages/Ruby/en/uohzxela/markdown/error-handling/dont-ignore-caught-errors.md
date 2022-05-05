## **Error Handling**
Thrown errors are a good thing! They mean the runtime has successfully
identified when something in your program has gone wrong and it's letting
you know by stopping method execution on the current stack, killing the
process, and notifying you in the logs with a stack trace.

### Don't ignore caught errors
Doing nothing with a caught error doesn't give you the ability to ever fix
or react to said error. Logging the error
isn't much better as often times it can get lost in a sea of other logs. If you wrap any bit of code in a `begin/rescue` it means you
think an error may occur there and therefore you should have a plan,
or create a code path, for when it occurs.

**Bad:**
```ruby
require 'logger'

logger = Logger.new(STDOUT)

begin
  method_that_might_throw()
rescue StandardError => err
  logger.info(err)
end
```

**Good:**
```ruby
require 'logger'

logger = Logger.new(STDOUT)
# Change the logger level to ERROR to output only logs with ERROR level and above
logger.level = Logger::ERROR

begin
  method_that_might_throw()
rescue StandardError => err
  # Option 1: Only log errors
  logger.error(err)
  # Option 2: Notify end-user via an interface
  notify_user_of_error(err)
  # Option 3: Report error to a third-party service like Honeybadger
  report_error_to_service(err)
  # OR do all three!
end
```
**Good:**
```javascript
getdata()
  .then(data => {
    functionThatMightThrow(data);
  })
  .catch(error => {
    // One option (more noisy than console.log):
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // OR do all three!
  });
```
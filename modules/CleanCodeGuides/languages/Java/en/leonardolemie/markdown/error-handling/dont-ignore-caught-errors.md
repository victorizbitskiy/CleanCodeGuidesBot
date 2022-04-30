## **Error Handling**

### Don't ignore caught errors
Doing nothing with a caught error doesn't give you the ability to ever fix or react to said error. Logging the error to the console \(`console.log`\) isn't much better as often times it can get lost in a sea of things printed to the console. If you wrap any bit of code in a `try/catch` it means you think an error may occur there and therefore you should have a plan, or create a code path, for when it occurs.

Thrown errors are a good thing! They mean the runtime has successfully identified when something in your program has gone wrong and it's letting you know by stopping function execution on the current stack, killing the process \(in Node\), and notifying you in the console with a stack trace.

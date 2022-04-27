#### Put tests in local classes

> [Clean ABAP] > [Content] > [Testing] > [Test Classes] > [This section]

Put unit tests into the local test include of the class under test.
This ensures that people find these tests when refactoring the class
and allows them to run all associated tests with a single key press,
as described in [How to execute test classes](#how-to-execute-test-classes).

Put component-, integration- and system tests into the local test include of a separate global class.
They do not directly relate to a single class under test, therefore they should not arbitrarily be
placed in one of the involved classes, but in a separate one.  
Mark this global test class as `FOR TESTING` and `ABSTRACT`
to avoid that it is accidentally referenced in production code.  
Putting tests into other classes has the danger that people overlook them
and forget to run them when refactoring the involved classes.

Therefore it is beneficial to use *test relations* to document which objects
are tested by the test.  
With the example below the test class `hiring_test`
could be executed while being in the class `recruting` or `candidate` via the shrotcut `Shift-Crtl-F12` \(Windows\) or `Cmd-Shift-F12` \(macOS\).

```abap
"! @testing recruting
"! @testing candidate
class hiring_test definition
  for testing risk level dangerous duration medium
  abstract.
  ...
endclass.
```
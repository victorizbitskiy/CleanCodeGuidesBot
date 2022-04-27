#### Public instance methods should be part of an interface

> [Clean ABAP] > [Content] > [Methods] > [Methods: Object orientation] > [This section]

Public instance methods should always be part of an interface.
This decouples dependencies and simplifies mocking them in unit tests.

```ABAP
METHOD /clean/blog_post~publish.
```

In clean object orientation, having a method public without an interface does not make much sense -
with few exceptions such as enumeration classes
which will never have an alternative implementation and will never be mocked in test cases.

> [Interfaces vs. abstract classes](sub-sections/InterfacesVsAbstractClasses.md)
describes why this also applies to classes that overwrite inherited methods.
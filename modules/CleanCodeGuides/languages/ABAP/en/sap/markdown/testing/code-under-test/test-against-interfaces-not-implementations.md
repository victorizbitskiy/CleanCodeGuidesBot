#### Test against interfaces, not implementations

> [Clean ABAP] > [Content] > [Testing] > [Code Under Test] > [This section]

A practical consequence of the [_Test publics, not private internals_](#test-publics-not-private-internals),
type your code under test with an _interface_

```ABAP
DATA code_under_test TYPE REF TO some_interface.
```

rather than a _class_

```ABAP
" anti-pattern
DATA code_under_test TYPE REF TO some_class.
```
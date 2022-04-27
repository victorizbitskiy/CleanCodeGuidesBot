#### Don't change the productive code to make the code testable

> [Clean ABAP] > [Content] > [Testing] > [Injection] > [This section]

```ABAP
" anti-pattern
IF me->in_test_mode = abap_true.
```
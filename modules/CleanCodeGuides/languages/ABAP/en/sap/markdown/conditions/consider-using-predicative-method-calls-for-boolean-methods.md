### Consider using predicative method calls for boolean methods

> [Clean ABAP] > [Content] > [Conditions] > [This section]

The predicative method call for boolean methods, e.g.

```ABAP
IF [ NOT ] condition_is_fulfilled( ).
```

is not just very compact, but it also allows to keep the code closer to natural language as the comparison expression:

```ABAP
" anti-pattern
IF condition_is_fulfilled( ) = abap_true / abap_false.
```

Mind that the predicative method call `... meth( ) ...` is just a short form of `... meth( ) IS NOT INITIAL ...`, see [Predicative Method Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_calls.htm) in the ABAP Keyword Documentation. This is why the short form should only be used for methods returning types where the non-initial value has the meaning of "true" and the initial value has the meaning of "false".
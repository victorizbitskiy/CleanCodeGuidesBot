### Prefer simpler methods to regular expressions

> [Clean ABAP] > [Content] > [Regular expressions] > [This section]

```ABAP
IF input IS NOT INITIAL.
" IF matches( val = input  regex = '.+' ).

WHILE contains( val = input  sub = 'abc' ).
" WHILE contains( val = input  regex = 'abc' ).
```

Regular expressions become hard to understand very quickly.
Simple cases are usually easier without them.

Regular expressions also usually consume more memory and processing time
because they need to be parsed into an expression tree and compiled at runtime into an executable matcher.
Simple solutions may do with a straight-forward loop and a temporary variable.

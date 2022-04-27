### Condense your code

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```ABAP
DATA(result) = calculate( items ).
```

instead of adding unneeded blanks

```ABAP
" anti-pattern
DATA(result)        =      calculate(    items =   items )   .
```
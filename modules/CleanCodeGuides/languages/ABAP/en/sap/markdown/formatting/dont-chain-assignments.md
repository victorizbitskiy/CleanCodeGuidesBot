### Don't chain assignments

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```abap
var2 = var3.
var1 = var3.
```

```abap
var1 = xsdbool( var2 = var3 ).
```

Chained assignments usually confuse the reader. Besides, the inline declaration doesn't work in any position of a multiple assignment.

```abap
" anti-pattern
var1 = var2 = var3.
```

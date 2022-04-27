### Don't declare inline in optional branches

> [Clean ABAP] > [Content] > [Variables] > [This section]

```ABAP
" anti-pattern
IF has_entries = abap_true.
  DATA(value) = 1.
ELSE.
  value = 2.
ENDIF.
```

This works fine because ABAP handles inline declarations as if they were at the beginning of the method.
However, it is extremely confusing for readers,
especially if the method is longer and you don't spot the declaration right away.
In this case, break with inlining and put the declaration up-front:

```ABAP
DATA value TYPE i.
IF has_entries = abap_true.
  value = 1.
ELSE.
  value = 2.
ENDIF.
```

> Read more in _Chapter 5: Formatting: Vertical Distance: Variable Declarations_ of [Robert C. Martin's _Clean Code_].
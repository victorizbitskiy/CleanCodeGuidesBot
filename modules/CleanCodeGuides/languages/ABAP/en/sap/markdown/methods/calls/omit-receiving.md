#### Omit RECEIVING

> [Clean ABAP] > [Content] > [Methods] > [Calls] > [This section]

```ABAP
DATA(sum) = aggregate_values( values ).
```

instead of the needlessly longer

```ABAP
" anti-pattern
aggregate_values(
  EXPORTING
    values = values
  RECEIVING
    result = DATA(sum) ).
```

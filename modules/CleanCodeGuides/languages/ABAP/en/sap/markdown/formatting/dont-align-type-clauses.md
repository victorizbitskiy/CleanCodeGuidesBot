### Don't align type clauses

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```ABAP
DATA name TYPE seoclsname.
DATA reader TYPE REF TO /clean/reader.
```

A variable and its type belong together and should therefore be visually grouped in close proximity.
Aligning the `TYPE` clauses draws attention away from that and suggests that the variables form one vertical group, and their types another one.
Alignment also produces needless editing overhead, requiring you to adjust all indentations when the length of the longest variable name changes.

```ABAP
" anti-pattern
DATA name   TYPE seoclsname.
DATA reader TYPE REF TO /clean/reader.
```

### Indent and snap to tab

> [Clean ABAP] > [Content] > [Formatting] > [This section]

Indent parameter keywords by 2 spaces and parameters by 4 spaces:

```ABAP
DATA(sum) = add_two_numbers(
              EXPORTING
                value_1 = 5
                value_2 = 6
              CHANGING
                errors  = errors ).
```

If you have no keywords, indent the parameters by 4 spaces.

```ABAP
DATA(sum) = add_two_numbers(
                value_1 = 5
                value_2 = 6 ).
```

Use the Tab key to indent. It's okay if this adds one more space than needed.
\(This happens if the `DATA(sum) =` part at the left has an uneven number of characters.\)
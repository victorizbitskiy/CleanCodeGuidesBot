### Break the call to a new line if the line gets too long

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```ABAP
DATA(some_super_long_param_name) =
  if_some_annoying_interface~add_two_numbers_in_a_long_name(
      value_1 = 5
      value_2 = 6 ).
```
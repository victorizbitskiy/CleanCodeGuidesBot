### Add a single blank line to separate things, but not more

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```ABAP
DATA(result) = do_something( ).

DATA(else) = calculate_this( result ).
```

to highlight that the two statements do different things. But there is no reason for

```ABAP
" anti-pattern
DATA(result) = do_something( ).



DATA(else) = calculate_this( result ).
```

The urge to add separating blank lines may be an indicator that your method doesn't [do one thing](#do-one-thing-do-it-well-do-it-only).
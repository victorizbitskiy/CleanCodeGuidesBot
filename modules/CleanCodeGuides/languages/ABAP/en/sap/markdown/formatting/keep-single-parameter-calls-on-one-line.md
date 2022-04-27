### Keep single parameter calls on one line

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```ABAP
DATA(unique_list) = remove_duplicates( list ).
remove_duplicates( CHANGING list = list ).
```

instead of the needlessly longer

```ABAP
" anti-pattern
DATA(unique_list) = remove_duplicates(
                           list ).
DATA(unique_list) = remove_duplicates(
                         CHANGING
                           list = list ).
```
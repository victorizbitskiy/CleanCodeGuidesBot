#### Omit the parameter name in single parameter calls

> [Clean ABAP] > [Content] > [Methods] > [Calls] > [This section]

```ABAP
DATA(unique_list) = remove_duplicates( list ).
```

instead of the needlessly longer

```ABAP
" anti-pattern
DATA(unique_list) = remove_duplicates( list = list ).
```

There are cases, however, where the method name alone is not clear enough
and repeating the parameter name may further understandability:

```ABAP
car->drive( speed = 50 ).
update( asynchronous = abap_true ).
```
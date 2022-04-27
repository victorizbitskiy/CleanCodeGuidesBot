### Use Booleans wisely

> [Clean ABAP] > [Content] > [Booleans] > [This section]

We often encounter cases where Booleans seem to be a natural choice

```ABAP
" anti-pattern
is_archived = abap_true.
```

until a change of viewpoint suggests
we should have chosen an enumeration

```ABAP
archiving_status = /clean/archivation_status=>archiving_in_process.
```

Generally, Booleans are a bad choice
to distinguish types of things
because you will nearly always encounter cases
that are not exclusively one or the other

```ABAP
assert_true( xsdbool( document->is_archived( ) = abap_true AND
                      document->is_partially_archived( ) = abap_true ) ).
```

[Split method instead of Boolean input parameter](#split-method-instead-of-boolean-input-parameter)
moreover explains why you should always challenge Boolean parameters.

> Read more in
> [1](http://www.beyondcode.org/articles/booleanVariables.html)
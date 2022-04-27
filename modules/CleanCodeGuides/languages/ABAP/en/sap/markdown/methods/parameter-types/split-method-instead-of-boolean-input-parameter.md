#### Split method instead of Boolean input parameter

> [Clean ABAP] > [Content] > [Methods] > [Parameter Types] > [This section]

Boolean input parameters are often an indicator
that a method does _two_ things instead of one.

```ABAP
" anti-pattern
METHODS update
  IMPORTING
    do_save TYPE abap_bool.
```

Also, method calls with a single - and thus unnamed - Boolean parameter
tend to obscure the parameter's meaning.

```ABAP
" anti-pattern
update( abap_true ).  " what does 'true' mean? synchronous? simulate? commit?
```

Splitting the method may simplify the methods' code
and describe the different intentions better

```ABAP
update_without_saving( ).
update_and_save( ).
```

Common perception suggests that setters for Boolean variables are okay:

```ABAP
METHODS set_is_deleted
  IMPORTING
    new_value TYPE abap_bool.
```

> Read more in
> [1](http://www.beyondcode.org/articles/booleanVariables.html)
> [2](https://silkandspinach.net/2004/07/15/avoid-boolean-parameters/)
> [3](http://jlebar.com/2011/12/16/Boolean_parameters_to_API_functions_considered_harmful..html)
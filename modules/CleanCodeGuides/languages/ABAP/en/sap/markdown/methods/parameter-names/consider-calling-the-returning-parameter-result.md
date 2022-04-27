#### Consider calling the RETURNING parameter RESULT

> [Clean ABAP] > [Content] > [Methods] > [Parameter Names] > [This section]

Good method names are usually so good that the `RETURNING` parameter does not need a name of its own.
The name would do little more than parrot the method name or repeat something obvious.

Repeating a member name can even produce conflicts that need to be resolved by adding a superfluous `me->`.

```ABAP
" anti-pattern
METHODS get_name
  RETURNING
    VALUE(name) TYPE string.

METHOD get_name.
  name = me->name.
ENDMETHOD.
```

In these cases, simply call the parameter `RESULT`, or something like `RV_RESULT` if you prefer Hungarian notation.

Name the `RETURNING` parameter if it is _not_ obvious what it stands for,
for example in methods that return `me` for method chaining,
or in methods that create something but don't return the created entity but only its key or so.
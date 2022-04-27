### Prefer inline to up-front declarations

> [Clean ABAP] > [Content] > [Variables]> [This section]

If you follow these guidelines, your methods will become so short \(3-5 statements\)
that declaring variables inline at first occurrence will look more natural

```ABAP
METHOD do_something.
  DATA(name) = 'something'.
  DATA(reader) = /clean/reader=>get_instance_for( name ).
  result = reader->read_it( ).
ENDMETHOD.
```

than declaring variables with a separate `DATA` section at the beginning of the method

```ABAP
" anti-pattern
METHOD do_something.
  DATA:
    name   TYPE seoclsname,
    reader TYPE REF TO /dirty/reader.
  name = 'something'.
  reader = /dirty/reader=>get_instance_for( name ).
  result = reader->read_it( ).
ENDMETHOD.
```

> Read more in _Chapter 5: Formatting: Vertical Distance: Variable Declarations_ of [Robert C. Martin's _Clean Code_].

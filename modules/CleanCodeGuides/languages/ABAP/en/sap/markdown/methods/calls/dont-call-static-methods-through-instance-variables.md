#### Don't call static methods through instance variables

> [Clean ABAP] > [Content] > [Methods] > [Calls] > [This section]

For calling a static method, use
```ABAP
cl_my_class=>static_method( ).
```

Instead of calling it through an instance variable to `cl_my_class`
```ABAP
" anti-pattern
lo_my_instance->static_method( ).
```

A static method is attached to the class itself, and calling it through an instance variable is a potential source of confusion.

It's OK to call a static method of the same class without qualifying it within another static method.

```ABAP
METHOD static_method.
  another_static_method( ).
  yet_another( ).
ENDMETHOD.
```

However, within an instance method, even when calling a static method of the same class, you should still qualify the call with the class name:

```ABAP
CLASS cl_my_class IMPLEMENTATION.

  METHOD instance_method.
    cl_my_class=>a_static_method( ).
    another_instance_method( ).
  ENDMETHOD.

  ...
```
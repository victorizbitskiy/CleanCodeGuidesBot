#### Consider CX_DYNAMIC_CHECK for avoidable exceptions

> [Clean ABAP] > [Content] > [Error Handling] > [Throwing] > [This section]

Use cases for `CX_DYNAMIC_CHECK` are rare,
and in general we recommend to resort to the other exception types.
However, you may want to consider this kind of exception
as a replacement for `CX_STATIC_CHECK` if the caller has full,
conscious control over whether an exception can occur.

```ABAP
DATA value TYPE decfloat.
value = '7.13'.
cl_abap_math=>get_db_length_decs(
  EXPORTING
    in     = value
  IMPORTING
    length = DATA(length) ).
```

For example, consider the method `get_db_length_decs`
of class `cl_abap_math`, that tells you the number of digits
and decimal places of a decimal floating point number.
This method raises the dynamic exception `cx_parameter_invalid_type`
if the input parameter does not reflect a decimal floating point number.
Usually, this method will be called
for a fully and statically typed variable,
such that the developer knows
whether that exception can ever occur or not.
In this case, the dynamic exception would enable the caller
to omit the unnecessary `CATCH` clause.
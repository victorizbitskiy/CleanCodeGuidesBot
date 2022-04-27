### Prefer CASE to ELSE IF for multiple alternative conditions

> [Clean ABAP] > [Content] > [Ifs] > [This section]

```ABAP
CASE type.
  WHEN type-some_type.
    " ...
  WHEN type-some_other_type.
    " ...
  WHEN OTHERS.
    RAISE EXCEPTION NEW /clean/unknown_type_failure( ).
ENDCASE.
```

`CASE` makes it easy to see a set of alternatives that exclude each other.
It can be faster than a series of `IF`s because it can translate to a different microprocessor command
instead of a series of subsequently evaluated conditions.
You can introduce new cases quickly, without having to repeat the discerning variable over and over again.
The statement even prevents some errors that can occur when accidentally nesting the `IF`-`ELSEIF`s.

```ABAP
" anti-pattern
IF type = type-some_type.
  " ...
ELSEIF type = type-some_other_type.
  " ...
ELSE.
  RAISE EXCEPTION NEW /dirty/unknown_type_failure( ).
ENDIF.
```
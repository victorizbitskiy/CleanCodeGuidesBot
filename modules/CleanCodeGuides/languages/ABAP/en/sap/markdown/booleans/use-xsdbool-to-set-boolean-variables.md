### Use XSDBOOL to set Boolean variables

> [Clean ABAP] > [Content] > [Booleans] > [This section]

```ABAP
DATA(has_entries) = xsdbool( line IS NOT INITIAL ).
```

The equivalent `IF`-`THEN`-`ELSE` is much longer for nothing:

```ABAP
" anti-pattern
IF line IS INITIAL.
  has_entries = abap_false.
ELSE.
  has_entries = abap_true.
ENDIF.
```

`xsdbool` is the best method for our purpose, as it directly produces a `char1`,
which fits our boolean type `abap_bool` best.
The equivalent functions `boolc` and `boolx` produce different types
and add an unnecessary implicit type conversion.

We agree that the name `xsdbool` is unlucky and misleading;
after all, we're not at all interested in the "XML Schema Definition" parts that the "xsd" prefix suggests.

A possible alternative to `xsdbool` is the `COND` ternary form.
Its syntax is intuitive, but a little longer because it needlessly repeats the `THEN abap_true` segment,
and requires knowledge of the implicit default value `abap_false` -
which is why we suggest it only as secondary solution.

```ABAP
DATA(has_entries) = COND abap_bool( WHEN line IS NOT INITIAL THEN abap_true ).
```
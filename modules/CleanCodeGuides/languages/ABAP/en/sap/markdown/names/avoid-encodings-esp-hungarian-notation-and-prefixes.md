### Avoid encodings, esp. Hungarian notation and prefixes

> [Clean ABAP] > [Content] > [Names] > [This section]

We encourage you to get rid of _all_ encoding prefixes.

```ABAP
METHOD add_two_numbers.
  result = a + b.
ENDMETHOD.
```

instead of the needlessly longer

```ABAP
METHOD add_two_numbers.
  rv_result = iv_a + iv_b.
ENDMETHOD.
```

> [Avoid Encodings](sub-sections/AvoidEncodings.md)
> describes the reasoning in depth.
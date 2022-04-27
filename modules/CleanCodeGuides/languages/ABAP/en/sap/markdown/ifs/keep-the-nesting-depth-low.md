### Keep the nesting depth low

> [Clean ABAP] > [Content] > [Ifs] > [This section]

```ABAP
" anti-pattern
IF <this>.
  IF <that>.
  ENDIF.
ELSE.
  IF <other>.
  ELSE.
    IF <something>.
    ENDIF.
  ENDIF.
ENDIF.
```

Nested `IF`s get hard to understand very quickly and require an exponential number of test cases for complete coverage.

Decision trees can usually be taken apart by forming sub-methods and introducing boolean helper variables.

Other cases can be simplified by merging IFs, such as

```ABAP
IF <this> AND <that>.
```

instead of the needlessly nested

```ABAP
" anti-pattern
IF <this>.
  IF <that>.
```
### Prefer basis checks to regular expressions

> [Clean ABAP] > [Content] > [Regular expressions] > [This section]

```ABAP
CALL FUNCTION 'SEO_CLIF_CHECK_NAME'
  EXPORTING
    cls_name = class_name
  EXCEPTIONS
    ...
```

instead of reinventing things

```ABAP
" anti-pattern
DATA(is_valid) = matches( val     = class_name
                          pattern = '[A-Z][A-Z0-9_]{0,29}' ).
```

> There seems to be a natural tendency to turn blind to the Don't-Repeat-Yourself \(DRY\) principle
> when there are regular expressions around,
> compare section _Chapter 17: Smells and Heuristics: General: G5: Duplication_ in [Robert C. Martin's _Clean Code_].

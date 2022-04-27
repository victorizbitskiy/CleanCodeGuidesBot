#### Throw one type of exception

> [Clean ABAP] > [Content] > [Error Handling] > [Throwing] > [This section]

```ABAP
METHODS generate
  RAISING
    cx_generation_error.
```

In the vast majority of cases, throwing multiple types of exceptions has no use.
The caller usually is neither interested nor able to distinguish the error situations.
He will therefore typically handle them all in the same way -
and if this is the case, why distinguish them in the first place?

```ABAP
" anti-pattern
METHODS generate
  RAISING
    cx_abap_generation
    cx_hdbr_access_error
    cx_model_read_error.
```

A better solution to recognize different error situations is using one exception type
but adding sub-classes that allow - but don't require - reacting to individual error situations,
as described in [Use sub-classes to enable callers to distinguish error situations](#use-sub-classes-to-enable-callers-to-distinguish-error-situations).

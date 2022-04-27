#### Prefer exceptions to return codes

> [Clean ABAP] > [Content] > [Error Handling] > [Return Codes] > [This section]

```ABAP
METHOD try_this_and_that.
  RAISE EXCEPTION NEW cx_failed( ).
ENDMETHOD.
```

instead of

```ABAP
" anti-pattern
METHOD try_this_and_that.
  error_occurred = abap_true.
ENDMETHOD.
```

Exceptions have multiple advantages over return codes:

- Exceptions keep your method signatures clean:
you can return the result of the method as a `RETURNING` parameter and still throw exceptions alongside.
Return codes pollute your signatures with additional parameters for error handling.

- The caller doesn't have to react to them immediately.
He can simply write down the happy path of his code.
The exception-handling `CATCH` can be at the very end of his method, or completely outside.

- Exceptions can provide details on the error in their attributes and through methods.
Return codes require you to devise a different solution on your own, such as also returning a log.

- The environment reminds the caller with syntax errors to handle exceptions.
Return codes can be accidentally ignored without anybody noticing.

#### Don't let failures slip through

> [Clean ABAP] > [Content] > [Error Handling] > [Return Codes] > [This section]

If you do have to use return codes, for example because you call Functions and older code not under your control,
make sure you don't let failures slip through.

```ABAP
DATA:
  current_date TYPE string,
  response     TYPE bapiret2.

CALL FUNCTION 'BAPI_GET_CURRENT_DATE'
  IMPORTING
    current_date = current_date
  CHANGING
    response     = response.

IF response-type = 'E'.
  RAISE EXCEPTION NEW /clean/some_error( ).
ENDIF.
```
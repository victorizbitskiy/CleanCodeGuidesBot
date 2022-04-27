#### Clear or overwrite EXPORTING reference parameters

> [Clean ABAP] > [Content] > [Methods] > [Parameter Initialization] > [This section]

Reference parameters refer to existing memory areas that may be filled beforehand.
Clear or overwrite them to provide reliable data:

```ABAP
METHODS square
  EXPORTING
    result TYPE i.

" clear
METHOD square.
  CLEAR result.
  " ...
ENDMETHOD.

" overwrite
METHOD square.
  result = cl_abap_math=>square( 2 ).
ENDMETHOD.
```

> Code inspector and Checkman point out `EXPORTING` variables that are never written.
Use these static checks to avoid this otherwise rather obscure error source.
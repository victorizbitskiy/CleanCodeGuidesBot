#### Extract the call to the code under test to its own method

> [Clean ABAP] > [Content] > [Testing] > [Code Under Test] > [This section]

If the method to be tested requires a lot of parameters or prepared data,
it can help to extract the call to it to a helper method of its own that defaults the uninteresting parameters:

```ABAP
METHODS map_xml_to_itab
  IMPORTING
    xml_string TYPE string
    config     TYPE /clean/xml2itab_config DEFAULT default_config
    format     TYPE /clean/xml2itab_format DEFAULT default_format.

METHOD map_xml_to_itab.
  result = cut->map_xml_to_itab( xml_string = xml_string
                                 config     = config
                                 format     = format ).
ENDMETHOD.

DATA(itab) = map_xml_to_itab( '<xml></xml>' ).
```

Calling the original method directly can swamp your test with a lot of meaningless details:

```ABAP
" anti-pattern
DATA(itab) = cut->map_xml_to_itab( xml_string = '<xml></xml>'
                                   config     = VALUE #( 'some meaningless stuff' )
                                   format     = VALUE #( 'more meaningless stuff' ) ).
```

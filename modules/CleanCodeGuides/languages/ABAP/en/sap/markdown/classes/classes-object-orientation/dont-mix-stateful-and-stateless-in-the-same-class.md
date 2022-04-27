#### Don't mix stateful and stateless in the same class

> [Clean ABAP] > [Content] > [Classes] > [Classes: Object orientation] > [This section]

Don't mix the stateless and the stateful
programming paradigms in the same class.

In stateless programming, methods get input and produce output,
_without any side effects_, resulting in methods
that produce the same result
no matter when and in what order they are called.

```ABAP
CLASS /clean/xml_converter DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS convert
      IMPORTING
        file_content  TYPE xstring
      RETURNING
        VALUE(result) TYPE /clean/some_inbound_message.
ENDCLASS.

CLASS /clean/xml_converter IMPLEMENTATION.
  METHOD convert.
    cl_proxy_xml_transform=>xml_xstring_to_abap(
      EXPORTING
        xml       = file_content
        ext_xml   = abap_true
        svar_name = 'ROOT_NODE'
      IMPORTING
        abap_data = result ).
   ENDMETHOD.
ENDCLASS.
```

In stateful programming, we manipulate the internal state of objects
through their methods, meaning it is _full of side effects_.

```ABAP
CLASS /clean/log DEFINITION PUBLIC CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS add_message IMPORTING message TYPE /clean/message.
  PRIVATE SECTION.
    DATA messages TYPE /clean/message_table.
ENDCLASS.

CLASS /clean/log IMPLEMENTATION.
  METHOD add_message.
    INSERT message INTO TABLE messages.
  ENDMETHOD.
ENDCLASS.
```

Both paradigms are okay and have their applications.
However, _mixing_ them in the same object produces code
that is hard to understand and sure to fail
with obscure carry-over errors and synchronicity problems.
Don't do that.
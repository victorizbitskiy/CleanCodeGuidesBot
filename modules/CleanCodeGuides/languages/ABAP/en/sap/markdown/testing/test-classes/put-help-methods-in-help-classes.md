#### Put help methods in help classes

> [Clean ABAP] > [Content] > [Testing] > [Test Classes] > [This section]

Put help methods used by several test classes in a help class. Make the help methods available through 
inheritance \(is-a relationship\) or delegation \(has-a relationship\).

```abap
" inheritance example

CLASS lth_unit_tests DEFINITION ABSTRACT.

  PROTECTED SECTION.
    CLASS-METHODS assert_activity_entity
      IMPORTING
        actual_activity_entity TYPE REF TO zcl_activity_entity
        expected_activity_entity TYPE REF TO zcl_activity_entity.
    ...
ENDCLASS.

CLASS lth_unit_tests IMPLEMENTATION.

  METHOD assert_activity_entity.
    ...
  ENDMETHOD.

ENDCLASS.

CLASS ltc_unit_tests DEFINITION INHERITING FROM lth_unit_tests FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.
  ...
ENDCLASS.
```
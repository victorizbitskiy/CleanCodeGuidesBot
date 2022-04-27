#### Предпочитайте NEW вместо CREATE OBJECT

> [Чистый ABAP] > [Содержание] > [Классы] > [Конструкторы] > [Эта секция]

```ABAP
DATA object TYPE REF TO /clean/some_number_range.
object = NEW #( '/CLEAN/CXTGEN' )
...
DATA(object) = NEW /clean/some_number_range( '/CLEAN/CXTGEN' ).
...
DATA(object) = CAST /clean/number_range( NEW /clean/some_number_range( '/CLEAN/CXTGEN' ) ).
```

вместо излишне длинного

```ABAP
" anti-pattern
DATA object TYPE REF TO /dirty/some_number_range.
CREATE OBJECT object
  EXPORTING
    number_range = '/DIRTY/CXTGEN'.
```

конечно, за исключением случаев, когда вам нужно указать тип динамически

```ABAP
CREATE OBJECT number_range TYPE (dynamic_type)
  EXPORTING
    number_range = '/CLEAN/CXTGEN'.
```
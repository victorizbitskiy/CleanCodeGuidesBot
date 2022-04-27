#### Используйте FAIL для проверки ожидаемых исключений

> [Чистый ABAP] > [Содержание] > [Тестирование] > [Утверждения] > [Эта секция]

```ABAP
METHOD throws_on_empty_input.
  TRY.
      " when
      cut->do_something( '' ).
      cl_abap_unit_assert=>fail( ).
    CATCH /clean/some_exception.
      " then
  ENDTRY.
ENDMETHOD.
```
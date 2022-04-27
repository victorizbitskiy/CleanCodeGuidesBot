#### Не злоупотребляйте LOCAL FRIENDS для вторжения в проверенный код

> [Чистый ABAP] > [Содержание] > [Тестирование] > [Инъекция] > [Эта секция]

Модульные тесты, которые обращаются к приватным и защищенным членам класса для вставки мок данных, являются хрупкими: 
они перестают работать при изменении внутренней структуры тестируемого кода.

```ABAP
" anti-pattern
CLASS /dirty/class_under_test DEFINITION LOCAL FRIENDS unit_tests.
CLASS unit_tests IMPLEMENTATION.
  METHOD returns_right_result.
    cut->some_private_member = 'AUNIT_DUMMY'.
  ENDMETHOD.
ENDCLASS.
```
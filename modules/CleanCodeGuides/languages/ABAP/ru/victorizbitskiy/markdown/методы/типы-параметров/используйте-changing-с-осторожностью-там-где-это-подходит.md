#### Используйте CHANGING с осторожностью, там, где это подходит

> [Чистый ABAP] > [Содержание] > [Методы] > [Типы параметров] > [Эта секция]

`CHANGING` следует использовать только в тех случаях, 
когда существующая локальная переменная, уже
содержащая данные, должна обновиться лишь частично:

```ABAP
METHODS update_references
  IMPORTING
    new_reference TYPE /bobf/conf_key
  CHANGING
    bo_nodes      TYPE root_nodes.

METHOD update_references.
  LOOP AT bo_nodes REFERENCE INTO DATA(bo_node).
    bo_node->reference = new_reference.
  ENDLOOP.
ENDMETHOD.
```

Не заставляйте людей, пользующихся вашими методами, вводить ненужные локальные переменные для того, чтобы заполнить `CHANGING` параметр.
Не используйте `CHANGING` параметры для заполнения ранее пустой переменной.
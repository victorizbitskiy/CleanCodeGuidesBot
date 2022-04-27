#### Не указывайте необязательное ключевое слово EXPORTING

> [Чистый ABAP] > [Содержание] > [Методы] > [Вызовы] > [Эта секция]

```ABAP
modify->update( node           = /clean/my_bo_c=>node-item
                key            = item->key
                data           = item
                changed_fields = changed_fields ).
```

вместо излишне длинного

```ABAP
" anti-pattern
modify->update(
  EXPORTING
    node           = /dirty/my_bo_c=>node-item
    key            = item->key
    data           = item
    changed_fields = changed_fields ).
```
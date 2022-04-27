### Не допускайте пустых ветвей IF

> [Чистый ABAP] > [Содержание] > [Если] > [Эта секция]

```ABAP
IF has_entries = abap_false.
  " do some magic
ENDIF.
```

короче и понятнее, чем

```ABAP
" anti-pattern
IF has_entries = abap_true.
ELSE.
  " do some magic
ENDIF.
```
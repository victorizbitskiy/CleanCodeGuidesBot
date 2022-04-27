### Предпочитайте CASE вместо ELSE IF для нескольких альтернативных условий

> [Чистый ABAP] > [Содержание] > [Если] > [Эта секция]

```ABAP
CASE type.
  WHEN type-some_type.
    " ...
  WHEN type-some_other_type.
    " ...
  WHEN OTHERS.
    RAISE EXCEPTION NEW /clean/unknown_type_failure( ).
ENDCASE.
```

`CASE` позволяет легко увидеть набор исключающих друг друга альтернатив.
Еще он может быть быстрее, чем серия `IF`ов, потому что оно может переводиться в другую команду микропроцессора
вместо серии последовательно вычисленных условий.
Вы можете быстро добавлять новые условия, без необходимости повторять проверяемую переменную снова и снова.
Кроме того, он предотвращает некоторые ошибки, которые могут возникнуть при случайном вложении `IF`-`ELSEIF`ов.

```ABAP
" anti-pattern
IF type = type-some_type.
  " ...
ELSEIF type = type-some_other_type.
  " ...
ELSE.
  RAISE EXCEPTION NEW /dirty/unknown_type_failure( ).
ENDIF.
```
### Предпочитайте IS NOT вместо NOT IS

> [Чистый ABAP] > [Содержание] > [Условия] > [Эта секция]

```ABAP
IF variable IS NOT INITIAL.
IF variable NP 'TODO*'.
IF variable <> 42.
```

Отрицание логически эквивалентно
но требует проведения дополнительных преобразований "в уме",
что усложняет понимание.

```ABAP
" anti-pattern
IF NOT variable IS INITIAL.
IF NOT variable CP 'TODO*'.
IF NOT variable = 42.
```

> Более специфичный вариант
[Постарайтесь сделать условия положительными](#постарайтесь-сделать-условия-положительными). 
Так, как описано в разделе
[Alternative Language Constructs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm?file=abenalternative_langu_guidl.htm)
в руководстве по программированию на ABAP.
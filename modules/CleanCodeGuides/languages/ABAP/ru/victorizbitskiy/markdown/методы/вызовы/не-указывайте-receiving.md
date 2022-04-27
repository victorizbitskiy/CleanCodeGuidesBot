#### Не указывайте RECEIVING

> [Чистый ABAP] > [Содержание] > [Методы] > [Вызовы] > [Эта секция]

```ABAP
DATA(sum) = aggregate_values( values ).
```

вместо излишне длинного

```ABAP
" anti-pattern
aggregate_values(
  EXPORTING
    values = values
  RECEIVING
    result = DATA(sum) ).
```

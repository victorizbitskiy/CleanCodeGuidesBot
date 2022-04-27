#### Предпочитайте RETURNING вместо EXPORTING

> [Чистый ABAP] > [Содержание] > [Методы] > [Типы параметров] > [Эта секция]

```ABAP
METHODS square
  IMPORTING
    number        TYPE i
  RETURNING
    VALUE(result) TYPE i.

DATA(result) = square( 42 ).
```

Вместо излишне длинного

```ABAP
" anti-pattern
METHODS square
  IMPORTING
    number TYPE i
  EXPORTING
    result TYPE i.

square(
  EXPORTING
    number = 42
  IMPORTING
    result = DATA(result) ).
```

`RETURNING` не только делает вызов короче,
он также позволяет связывать методы в цепочку вызовов и предотвращает [при идентичном входном и выходном параметрах](#будьте-осторожны-с-идентичным-вводом-и-выводом).
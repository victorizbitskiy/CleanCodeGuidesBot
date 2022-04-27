#### Не очищайте VALUE параметры

> [Чистый ABAP] > [Содержание] > [Методы] > [Инициализация параметров] > [Эта секция]

Параметры, которые работаю с `VALUE`, передаются как новые отдельные области памяти, пустые по определению. 
Не очищайте их снова:

```ABAP
METHODS square
  EXPORTING
    VALUE(result) TYPE i.

METHOD square.
  " no need to CLEAR result
ENDMETHOD.
```

`RETURNING` параметры всегда являются `VALUE` параметрами, поэтому вам никогда не придется их очищать:

```ABAP
METHODS square
  RETURNING
    VALUE(result) TYPE i.

METHOD square.
  " no need to CLEAR result
ENDMETHOD.
```

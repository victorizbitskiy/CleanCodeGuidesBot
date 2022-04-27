#### Используйте либо RETURNING, либо EXPORTING, либо CHANGING, но не комбинацию

> [Чистый ABAP] > [Содержание] > [Методы] > [Типы параметров] > [Эта секция]

```ABAP
METHODS copy_class
  IMPORTING
    old_name      TYPE seoclsname
    new name      TYPE secolsname
  RETURNING
    VALUE(result) TYPE copy_result
  RAISING
    /clean/class_copy_failure.
```

вместо сбивающей с толку смеси

```ABAP
" anti-pattern
METHODS copy_class
  ...
  RETURNING
    VALUE(result)      TYPE vseoclass
  EXPORTING
    error_occurred     TYPE abap_bool
  CHANGING
    correction_request TYPE trkorr
    package            TYPE devclass.
```

Разные виды выходных параметров — это показатель того, что метод выполняет несколько функций. 
Это сбивает читателя с толку и излишне усложняет вызов такого метода.

Приемлемым исключением из этого правила могут быть строители \(builders\), 
которые используют свои входные данные при построении своих выходных данных:

```ABAP
METHODS build_tree
  CHANGING
    tokens        TYPE tokens
  RETURNING
    VALUE(result) TYPE REF TO tree.
```

Тем не менее, даже их можно сделать понятнее, приобразовав входные данные в объект:

```ABAP
METHODS build_tree
  IMPORTING
    tokens        TYPE REF TO token_stack
  RETURNING
    VALUE(result) TYPE REF TO tree.
```

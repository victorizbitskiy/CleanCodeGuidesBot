#### Разделите методы вместо добавления OPTIONAL параметров

> [Чистый ABAP] > [Содержание] > [Методы] > [Количество параметров] > [Эта секция]

```ABAP
METHODS do_one_thing IMPORTING what_i_need TYPE string.
METHODS do_another_thing IMPORTING something_else TYPE i.
```

для того, чтобы достичь желаемой семантики, поскольку ABAP не поддерживает [перегрузку](https://en.wikipedia.org/wiki/Function_overloading).

```ABAP
" anti-pattern
METHODS do_one_or_the_other
  IMPORTING
    what_i_need    TYPE string OPTIONAL
    something_else TYPE i OPTIONAL.
```

Необязательные параметры сбивают с толку тех, кто хочет вызвать метод:

- Какие из них действительно необходимы?
- Какие комбинации этих параметров допустимы?
- Какие исключают друг друга?

Несколько методов с параметрами, адаптированными для каждого варианта использования, позволяют избежать путаницы, четко документируя, какие комбинации параметров являются допустимыми и ожидаемыми.
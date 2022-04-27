#### Стремитесь к нескольким IMPORTING параметрам, лучше всего меньше трех

> [Чистый ABAP] > [Содержание] > [Методы] > [Количество параметров] > [Эта секция]

```ABAP
FUNCTION seo_class_copy
  IMPORTING
    clskey      TYPE seoclskey
    new_clskey  TYPE seoclskey
    config      TYPE class_copy_config
  EXPORTING
    ...
```

будет намного понятнее, чем

```ABAP
" anti-pattern
FUNCTION seo_class_copy
  IMPORTING
    clskey                 TYPE seoclskey
    new_clskey             TYPE seoclskey
    access_permission      TYPE seox_boolean DEFAULT seox_true
    VALUE(save)            TYPE seox_boolean DEFAULT seox_true
    VALUE(suppress_corr)   TYPE seox_boolean DEFAULT seox_false
    VALUE(suppress_dialog) TYPE seox_boolean DEFAULT seox_false
    VALUE(authority_check) TYPE seox_boolean DEFAULT seox_true
    lifecycle_manager      TYPE REF TO if_adt_lifecycle_manager OPTIONAL
    lock_handle            TYPE REF TO if_adt_lock_handle OPTIONAL
    VALUE(suppress_commit) TYPE seox_boolean DEFAULT seox_false
  EXPORTING
    ...
```

Входные параметры, если их слишком много, усложняют метод, 
поскольку он должен обрабатывать экспоненциальное количество комбинаций. 
Большое количество параметров является признаком того, что метод, вероятно, выполняет более одной функции.

Вы можете уменьшить количество параметров, объединив их по смыслу в структуры или объекты.
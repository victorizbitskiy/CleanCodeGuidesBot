#### RETURN, EXPORT, или CHANGE только одного параметра

> [Чистый ABAP] > [Содержание] > [Методы] > [Количество параметров] > [Эта секция]

Хороший метод делает _одну вещь_, и это должно быть отражено в методе тем, что он возвращает ровно одну вещь. 
Если выходные параметры вашего метода _не_ образуют логическую сущность, 
то ваш метод делает несколько вещей сразу, и вам следует разделить его.

В некоторых случаях выходные данные представляют собой логическую сущность, состоящую из нескольких вещей. 
В таких случаях лучше возвращать структуру или объект:

```ABAP
TYPES:
  BEGIN OF check_result,
    result      TYPE result_type,
    failed_keys TYPE /bobf/t_frw_key,
    messages    TYPE /bobf/t_frw_message,
  END OF check_result.

METHODS check_business_partners
  IMPORTING
    business_partners TYPE business_partners
  RETURNING
    VALUE(result)     TYPE check_result.
```

вместо

```ABAP
" anti-pattern
METHODS check_business_partners
  IMPORTING
    business_partners TYPE business_partners
  EXPORTING
    result            TYPE result_type
    failed_keys       TYPE /bobf/t_frw_key
    messages          TYPE /bobf/t_frw_message.
```

Особенно в сравнении с несколькими EXPORTING параметрами, это позволяет людям использовать функциональный стиль вызова, 
избавляет вас от необходимости думать о `IS SUPPLIED` и предотвращает ситуацию, когда можно случайно забыть 
получить важную информацию об ошибке `ERROR_OCCURRED`.

Вместо использования нескольких необязательных выходных параметров разделите метод на несколько, используя осмысленные шаблоны вызовов:

```ABAP
TYPES:
  BEGIN OF check_result,
    result      TYPE result_type,
    failed_keys TYPE /bobf/t_frw_key,
    messages    TYPE /bobf/t_frw_message,
  END OF check_result.

METHODS check
  IMPORTING
    business_partners TYPE business_partners
  RETURNING
    VALUE(result)     TYPE result_type.

METHODS check_and_report
  IMPORTING
    business_partners TYPE business_partners
  RETURNING
    VALUE(result)     TYPE check_result.
```
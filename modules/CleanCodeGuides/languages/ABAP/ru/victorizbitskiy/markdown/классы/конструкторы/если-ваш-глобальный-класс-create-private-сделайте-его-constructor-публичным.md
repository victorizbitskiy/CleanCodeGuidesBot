#### Если ваш глобальный класс CREATE PRIVATE, сделайте его CONSTRUCTOR публичным

> [Чистый ABAP] > [Содержание] > [Классы] > [Конструкторы] > [Эта секция]

```ABAP
CLASS /clean/some_api DEFINITION PUBLIC FINAL CREATE PRIVATE.
  PUBLIC SECTION.
    METHODS constructor.
```

Мы согласны с тем, что это противоречит самому себе.
Однако, согласно статье 
[ _Instance Constructor_ of the ABAP Help](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/abeninstance_constructor_guidl.htm),
указание `CONSTRUCTOR` в `PUBLIC SECTION` требуется, чтобы гарантировать правильную компиляцию и проверку синтаксиса.

Это относится только к глобальным классам.
В локальных классах делайте конструктор закрытым, каким он и должен быть.
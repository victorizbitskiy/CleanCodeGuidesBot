### Избегайте DEFAULT KEY

> [Чистый ABAP] > [Содержание] > [Таблицы] > [Эта секция]

```ABAP
" anti-pattern
DATA itab TYPE STANDARD TABLE OF row_type WITH DEFAULT KEY.
```

Ключи по умолчанию часто добавляются только для того, чтобы заставить работать новые функциональные операторы.
Сами ключи по сути, обычно лишние и тратят ресурсы впустую.
Они могут даже привести к непонятным ошибкам, поскольку игнорируют числовые типы данных.
Например, операторы `SORT` и `DELETE ADJACENT` без явного указания списка полей будут использовать первичный ключ внутренней таблицы. 
Если при этом используется DEFAULT KEY это может привести к неожиданным результатам. Например, если используются 
числовые поля в ключе в сочетании с READ TABLE... BINARY и т. д.

Либо укажите ключевые компоненты явно

```ABAP
DATA itab2 TYPE STANDARD TABLE OF row_type WITH NON-UNIQUE KEY comp1 comp2.
```

или используйте `EMPTY KEY` если вам вообще не нужен ключ.

```ABAP
DATA itab1 TYPE STANDARD TABLE OF row_type WITH EMPTY KEY.
```

> Следуя [Horst Keller's blog on _Internal Tables with Empty Key_](https://blogs.sap.com/2013/06/27/abap-news-for-release-740-internal-tables-with-empty-key/)
> 
> **Внимание:** `SORT` по внутренним таблицам с `EMPTY KEY` \(без явных полей сортировки\) вообще не сортирует,
> но будут выданы синтаксические предупреждения в случае, если отсутствие ключа может быть определено статически.
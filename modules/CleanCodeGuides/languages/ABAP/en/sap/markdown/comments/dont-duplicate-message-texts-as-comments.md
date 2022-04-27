### Don't duplicate message texts as comments

> [Clean ABAP] > [Content] > [Comments] > [This section]

```ABAP
" anti-pattern
" alert category not filled
MESSAGE e003 INTO dummy.
```

Messages change independently from your code,
and nobody will remember adjusting the comment,
such that it will outdate and even become misleading quickly
and without anybody noticing.

The modern IDEs give you easy ways to see the text behind a message,
for example in the ABAP Development Tools,
mark the message ID and press Shift+F2.

If you want it more explicit,
consider extracting the message to a method of its own.

```ABAP
METHOD create_alert_not_found_message.
  MESSAGE e003 INTO dummy.
ENDMETHOD.
```
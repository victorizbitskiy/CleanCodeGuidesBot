### Use | to assemble text

> [Clean ABAP] > [Content] > [Strings] > [This section]

```ABAP
DATA(message) = |Received HTTP code { status_code } with message { text }|.
```

String templates highlight better what's literal and what's variable,
especially if you embed multiple variables in a text.

```ABAP
" anti-pattern
DATA(message) = `Received an unexpected HTTP ` && status_code && ` with message ` && text.
```

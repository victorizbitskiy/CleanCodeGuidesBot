### Write comments to explain the why, not the what

> [Clean ABAP] > [Content] > [Comments] > [This section]

```ABAP
" can't fail, existence of >= 1 row asserted above
DATA(first_line) = table[ 1 ].
```

Nobody needs repeating the code in natural language

```ABAP
" anti-pattern
" select alert root from database by key
SELECT * FROM d_alert_root WHERE key = key.
```
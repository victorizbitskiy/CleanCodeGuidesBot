### Express yourself in code, not in comments

> [Clean ABAP] > [Content] > [Comments] > [This section]

```ABAP
METHOD correct_day_to_last_in_month.
  WHILE is_invalid( date ).
    reduce_day_by_one( CHANGING date = date ).
  ENDWHILE.
ENDMETHOD.

METHOD is_invalid.
  DATA zero_if_invalid TYPE i.
  zero_if_invalid = date.
  result = xsdbool( zero_if_invalid = 0 ).
ENDMETHOD.

METHOD reduce_day_by_one.
  date+6(2) = date+6(2) - 1.
ENDMETHOD.
```

instead of

```ABAP
" anti-pattern
" correct e.g. 29.02. in non-leap years as well as result of a date calculation would be
" something like e.g. the 31.06. that example has to be corrected to 30.06.
METHOD fix_day_overflow.
  DO 3 TIMES.
    " 31 - 28 = 3 => this correction is required not more than 3 times
    lv_dummy = cv_date.
    " lv_dummy is 0 if the date value is a not existing date - ABAP specific implementation
    IF ( lv_dummy EQ 0 ).
      cv_date+6(2) = cv_date+6(2) - 1. " subtract 1 day from the given date
    ELSE.
      " date exists => no correction required
      EXIT.
    ENDIF.
  ENDDO.
ENDMETHOD.
```

Clean Code does _not_ forbid you to comment your code - it encourages you to exploit _better_ means,
and resort to comments only if that fails.

> This example has been challenged from a performance point of view,
> claiming that cutting the methods so small worsens performance too much.
> Sample measurements show that the refactored code is 2.13 times slower than the original dirty variant.
> The clean variant takes 9.6 microseconds to fix the input `31-02-2018`, the dirty variant only 4.5 microseconds.
> This may be a problem when the method is run very often in a high-performance application;
> for regular user input validation, it should be acceptable.
> Resort to the section [Mind the performance](#mind-the-performance) to deal with Clean Code and performance issues.
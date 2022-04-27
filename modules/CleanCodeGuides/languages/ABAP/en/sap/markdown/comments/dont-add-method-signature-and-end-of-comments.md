### Don't add method signature and end-of comments

> [Clean ABAP] > [Content] > [Comments] > [This section]

Method signature comments don't help anybody.

```ABAP
" anti-pattern
* <SIGNATURE>---------------------------------------------------------------------------------------+
* | Static Public Method CALIBRATION_KPIS=>CALCULATE_KPI
* +-------------------------------------------------------------------------------------------------+
* | [--->] STRATEGY_ID                 TYPE        STRATEGY_ID
* | [--->] THRESHOLD                   TYPE        STRATEGY_THRESHOLD
* | [--->] DETECTION_OBJECT_SCORE      TYPE        T_HIT_RESULT
* | [<---] KPI                         TYPE        T_SIMULATED_KPI
* +--------------------------------------------------------------------------------------</SIGNATURE>
```

Decades ago, when you couldn't see the method signature when inspecting its code,
or working with printouts that had dozens of pages, these comments may have made sense.
But all modern ABAP IDEs \(SE24, SE80, ADT\) show the method signature easily
such that these comments have become nothing but noise.

> In the form-based editor of SE24/SE80, press button _Signature_.
> In the ABAP Development Tools, mark the method name and press F2
> or add the view _ABAP Element Info_ to your perspective.

Similarly, end-of comments are superfluous.
These comments may have been helpful decades ago,
when programs and functions and the nested IFs inside were hundreds of lines of code long.
But our modern coding style produces methods short enough to readily see
what opening statement an `ENDIF` or `ENDMETHOD` belongs to:

```ABAP
" anti-pattern
METHOD get_kpi_calc.
  IF has_entries = abap_false.
    result = 42.
  ENDIF.  " IF has_entries = abap_false
ENDMETHOD.   " get_kpi_calc
```
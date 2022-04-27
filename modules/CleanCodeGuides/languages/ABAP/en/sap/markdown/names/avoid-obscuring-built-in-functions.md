### Avoid obscuring built-in functions

> [Clean ABAP] > [Content] > [Names] > [This section]

Within a class, a built-in function is always obscured by methods of the class if they have the same name, regardless of the number and type of arguments in the function. The function is also obscured regardless of the number and type of method parameters. Built-in functions are, for instance, `condense( )`, `lines( )`, `line_exists( )`, `strlen( )`, etc. 

```ABAP
"anti-pattern
METHODS lines RETURNING VALUE(result) TYPE i.    
METHODS line_exists RETURNING VALUE(result) TYPE i.  
```

```ABAP
"anti-pattern 
CLASS-METHODS condense RETURNING VALUE(result) TYPE i.   
CLASS-METHODS strlen RETURNING VALUE(result) TYPE i.  
```

> Read More in [Built-In Functions - Obscuring with Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-us/abenbuilt_in_functions_syntax.htm#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_3?file=abenbuilt_in_functions_syntax.htm).
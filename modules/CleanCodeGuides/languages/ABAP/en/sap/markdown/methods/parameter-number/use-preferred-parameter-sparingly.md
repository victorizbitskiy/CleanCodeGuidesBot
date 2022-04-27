#### Use PREFERRED PARAMETER sparingly

> [Clean ABAP] > [Content] > [Methods] > [Parameter Number] > [This section]

The addition `PREFERRED PARAMETER` makes it hard to see which parameter is actually supplied,
making it harder to understand the code.
Minimizing the number of parameters, especially optional ones,
automatically reduces the need for `PREFERRED PARAMETER`.
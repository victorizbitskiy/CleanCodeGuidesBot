#### Descend one level of abstraction

> [Clean ABAP] > [Content] > [Methods] > [Method Body] > [This section]

Statements in a method should be one level of abstraction below the method itself.
Correspondingly, they should all be on the same level of abstraction.

```ABAP
METHOD create_and_publish.
  post = create_post( user_input ).
  post->publish( ).
ENDMETHOD.
```

instead of confusing mixtures of low level \(`trim`, `to_upper`, ...\) and high level \(`publish`, ...\) concepts like

```ABAP
" anti-pattern
METHOD create_and_publish.
  post = NEW blog_post( ).
  DATA(user_name) = trim( to_upper( sy-uname ) ).
  post->set_author( user_name ).
  post->publish( ).
ENDMETHOD.
```

A reliable way to find out what the right level of abstraction is is this:
Let the method's author explain what the method does in few, short words, without looking at the code.
The bullets \(s\)he numbers are the sub-methods the method should call or the statements it should execute.
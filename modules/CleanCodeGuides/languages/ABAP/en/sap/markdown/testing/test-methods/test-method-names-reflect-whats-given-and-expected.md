#### Test method names: reflect what's given and expected

> [Clean ABAP] > [Content] > [Testing] > [Test Methods] > [This section]

Good names reflect the given and then of the test:

```ABAP
METHOD reads_existing_entry.
METHOD throws_on_invalid_key.
METHOD detects_invalid_input.
```

Bad names reflect the when, repeat meaningless facts, or are cryptic:

```ABAP
" anti-patterns

" What's expected, success or failure?
METHOD get_conversion_exits.

" It's a test method, what else should it do but "test"?
METHOD test_loop.

" So it's parameterized, but what is its aim?
METHOD parameterized_test.

" What's "_wo_w" supposed to mean and will you still remember that in a year from now?
METHOD get_attributes_wo_w.
```

As ABAP allows only 30 characters in method names, it's fair to add an explanatory comment
if the name is too short to convey enough meaning.
ABAP Doc or the first line in the test method may be an appropriate choice for the comment.

Having lots of test methods whose names are too long may be an indicator
that you should split your single test class into several ones
and express the differences in the givens in the class's names.

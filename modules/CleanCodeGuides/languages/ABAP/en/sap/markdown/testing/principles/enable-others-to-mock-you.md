#### Enable others to mock you

> [Clean ABAP] > [Content] > [Testing] > [Principles] > [This section]

If you write code to be consumed by others, enable them to write unit tests for their own code,
for example by adding interfaces in all outward-facing places,
providing helpful test doubles that facilitate integration tests,
or applying dependency inversion to enable them to substitute the productive configuration with a test config.
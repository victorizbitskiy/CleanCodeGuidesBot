#### Use given-when-then

> [Clean ABAP] > [Content] > [Testing] > [Test Methods] > [This section]

Organize your test code along the given-when-then paradigm:
First, initialize stuff in a given section \("given"\),
second call the actual tested thing \("when"\),
third validate the outcome \("then"\).

If the given or then sections get so long
that you cannot visually separate the three sections anymore, extract sub-methods.
Blank lines or comments as separators may look good at first glance
but don't really reduce the visual clutter.
Still they are helpful for the reader and the novice test writer to separate the sections.
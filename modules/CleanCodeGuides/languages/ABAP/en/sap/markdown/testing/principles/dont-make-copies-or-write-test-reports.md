#### Don't make copies or write test reports

> [Clean ABAP] > [Content] > [Testing] > [Principles] > [This section]

Don't start working on a backlog item by making a `$TMP` copy of a development object and playing around with it.
Others won't notice these objects and therefore won't know the status of your work.
You will probably waste a lot of time by making the working copy in the first place.
You will also forget to delete the copy afterwards, spamming your system and dependencies.
\(Don't believe this? Go to your development system and check your `$TMP` right now.\)

Also, don't start by writing a test report that calls something in a specific way,
and repeat that to verify that things are still working when you're working on it.
This is poor man's testing: repeating a test report by hand and verifying by eye whether everything is still fine.
Take the next step and automate this report in a unit test,
with an automatic assertion that tells you whether the code is still okay.
First, you will spare yourself the effort of having to write the unit tests afterwards.
Second, you will save a lot of time for the manual repetitions, plus avoid getting bored and tired over it.
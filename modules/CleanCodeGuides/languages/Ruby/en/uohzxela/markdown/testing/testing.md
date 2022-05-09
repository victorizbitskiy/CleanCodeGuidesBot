## Testing

Testing is more important than shipping. If you have no tests or an
inadequate amount, then every time you ship code you won't be sure that you
didn't break anything. Deciding on what constitutes an adequate amount is up
to your team, but having 100% coverage \(all statements and branches\) is how
you achieve very high confidence and developer peace of mind. This means that
in addition to having a [great testing framework](http://rspec.info/), you also need to use a
[good coverage tool](https://coveralls.io/).

There's no excuse to not write tests. Aim to always write tests
for every new feature/module you introduce. If your preferred method is
Test Driven Development \(TDD\), that is great, but the main point is to just
make sure you are reaching your coverage goals before launching any feature,
or refactoring an existing one.
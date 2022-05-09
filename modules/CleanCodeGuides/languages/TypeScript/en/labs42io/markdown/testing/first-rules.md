## Testing

### F.I.R.S.T. rules

Clean tests should follow the rules:
- _Fast_ tests should be fast because we want to run them frequently.
- _Independent_ tests should not depend on each other. They should provide same output whether run independently or all together in any order.
- _Repeatable_ tests should be repeatable in any environment and there should be no excuse for why they fail.
- _Self-Validating_ a test should answer with either *Passed* or *Failed*. You don't need to compare log files to answer if a test passed.
- _Timely_ unit tests should be written before the production code. If you write tests after the production code, you might find writing tests too hard.
## **SOLID**
### Liskov Substitution Principle \(LSP\)

This is a scary term for a very simple concept. It's formally defined as "If S is a subtype of T, then objects of type T may be replaced with objects of type S \(i.e., objects of type S may substitute objects of type T\) without altering any of the desirable properties of that program \(correctness, task performed, etc.\)." That's an even scarier definition.

The best explanation for this is if you have a parent class and a child class, then the base class and child class can be used interchangeably without getting incorrect results. This might still be confusing, so let's take a look at the classic Square-Rectangle example. Mathematically, a square is a rectangle, but
if you model it using the "is-a" relationship via inheritance, you quickly get into trouble.
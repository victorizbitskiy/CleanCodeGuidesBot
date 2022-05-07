## Variables
### Don't add unneeded context

If your class/type/object name tells you something, don't repeat that in your variable name.
**Bad:**
```ts
type Car = {
  carMake: string;
  carModel: string;
  carColor: string;
}
function print(car: Car): void {
  console.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
}
```
**Good:**
```ts
type Car = {
  make: string;
  model: string;
  color: string;
}
function print(car: Car): void {
  console.log(`${car.make} ${car.model} (${car.color})`);
}
```

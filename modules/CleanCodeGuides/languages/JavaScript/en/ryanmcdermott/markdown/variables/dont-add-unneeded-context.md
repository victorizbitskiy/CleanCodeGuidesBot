## **Variables**
### Don't add unneeded context

If your class/object name tells you something, don't repeat that in your
variable name.

**Bad:**
```javascript
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};
function paintCar(car, color) {
  car.carColor = color;
}
```

**Good:**
```javascript
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
function paintCar(car, color) {
  car.color = color;
}
```
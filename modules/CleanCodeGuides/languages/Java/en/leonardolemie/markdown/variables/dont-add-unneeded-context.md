## **Variables**

### Don't add unneeded context

If your class/object name tells you something, don't repeat that in your variable name.

**Bad:**
```java
class Car {
  public String carMake = "Honda";
  public String carModel = "Accord";
  public String carColor = "Blue";
}

void paintCar(Car car) {
  car.carColor = "Red";
}
```

**Good:**
```java
class Car {
  public String make = "Honda";
  public String model = "Accord";
  public String color = "Blue";
}

void paintCar(Car car) {
  car.color = "Red";
}
```
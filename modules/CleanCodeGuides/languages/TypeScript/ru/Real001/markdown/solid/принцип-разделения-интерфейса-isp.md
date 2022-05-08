## SOLID

### Принцип разделения интерфейса \(ISP\)

ISP говорит что "Клиенты не должны зависеть от классов, которые они не используют.". Этот принцип очень
связан с Принципом единой ответственности.
На самом деле это означает, что вы всегда должны проектировать свои абстракции таким образом, чтобы клиенты, которые используют открытые методы не получали весь пирог. Это также включает в себя возложение на клиентов бремени реализации методов, которые им на самом деле не нужны.

**Плохо:**

```ts
interface SmartPrinter {
  print();
  fax();
  scan();
}
class AllInOnePrinter implements SmartPrinter {
  print() {
    // ...
  }  
  
  fax() {
    // ...
  }
  scan() {
    // ...
  }
}
class EconomicPrinter implements SmartPrinter {
  print() {
    // ...
  }  
  
  fax() {
    throw new Error('Fax not supported.');
  }
  scan() {
    throw new Error('Scan not supported.');
  }
}
```

**Хорошо:**

```ts
interface Printer {
  print();
}
interface Fax {
  fax();
}
interface Scanner {
  scan();
}
class AllInOnePrinter implements Printer, Fax, Scanner {
  print() {
    // ...
  }  
  
  fax() {
    // ...
  }
  scan() {
    // ...
  }
}
class EconomicPrinter implements Printer {
  print() {
    // ...
  }
}
```

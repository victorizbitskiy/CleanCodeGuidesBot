## **Классы**
### Принцип единственной ответственности \(SRP\)
Как написано в clean code, «Должна быть лишь одна причина для изменения класса» \(There should never be more than one reason for a class to change\). Заманчиво всё засунуть в один класс, как в дорожный чемодан. Проблема в том, что ваш класс не будет концептуально связан, и вы будете часто изменять его на каждый чих. Очень важно минимизировать изменения в классе. Когда вы вносите изменения в класс с огромным функционалом, тяжело отследить последствия ваших изменений.

**Плохо:**
```javascript
class UserSettings {
  constructor(user) {
    this.user = user;
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }
  verifyCredentials() {
    // ...
  }
}
```

**Хорошо:**
```javascript
class UserAuth {
  constructor(user) {
    this.user = user;
  }
  verifyCredentials() {
    // ...
  }
}
class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }
  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```
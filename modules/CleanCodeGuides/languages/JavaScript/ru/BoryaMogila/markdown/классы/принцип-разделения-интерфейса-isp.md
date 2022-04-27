## **Классы**
### Принцип разделения интерфейса \(ISP\)
В javascript отсутствуют интерфейсы, так что этот принцип не получится использовать в полной мере. Тем не менее важно его использовать, даже при отсутствии системы типов javascript. 

ISP утверждает, что «Пользователи не должны зависеть от классов, которые они не используют» \(Clients should not be forced to depend upon interfaces that they do not use\). Интерфейсы это условные соглашения в JavaScript из-за неявной типизации. Хорошим примером в javascript могут быть классы с большими конфигами. Не заставляйте пользователей вашего класса вводить кучу конфигов. Они, как правило, не будут использовать их все. У вас не будет "жирного интерфейса", если вы их сделаете опциональными.

**Плохо:**
```javascript
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }
  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }
  traverse() {
    // ...
  }
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {} // Чаще вам не нужна анимация при движении.
  // ...
});
```

**Хорошо:**
```javascript
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }
  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }
  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }
  traverse() {
    // ...
  }
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {}
  }
});
```
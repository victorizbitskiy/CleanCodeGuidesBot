## **Классы**
### Принцип разделения интерфейса \(ISP\)
JavaScript не имеет интерфейсов, так что этот принцип не применяется так строго, как другие. Тем не менее, это важно и актуально даже в виду их отсутствия. Принцип утверждает, что клиенты не должны зависеть от интерфейсов, которые они не используют. Из-за утиной типизации, в JavaScript интерфейсы - это неявные контракты.

Хорошим примером станут классы, предусматривающие множество настроек для объектов. Полезно не требовать от клиентов проставления их всех, потому что большую часть времени все они не требуются. Создание опциональных настроек помогает предотвратить разбухание интерфейса.

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
  animationModule() {} // В большинстве случаев анимация нам не пригодится.
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
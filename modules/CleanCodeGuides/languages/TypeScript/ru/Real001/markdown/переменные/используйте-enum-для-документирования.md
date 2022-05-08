## Переменные

### Используйте enum для документирования

Enam'ы могут помочь документированию вашего кода. Например когда мы обеспокоены тем, что наши переменные
отличаются от значений.

**Плохо:**

```ts
const GENRE = {
  ROMANTIC: 'romantic',
  DRAMA: 'drama',
  COMEDY: 'comedy',
  DOCUMENTARY: 'documentary',
}
projector.configureFilm(GENRE.COMEDY);
class Projector {
  // delactation of Projector
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
        // some logic to be executed 
    }
  }
}
```

**Хорошо:**

```ts
enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY,
}
projector.configureFilm(GENRE.COMEDY);
class Projector {
  // delactation of Projector
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
        // some logic to be executed 
    }
  }
}
```

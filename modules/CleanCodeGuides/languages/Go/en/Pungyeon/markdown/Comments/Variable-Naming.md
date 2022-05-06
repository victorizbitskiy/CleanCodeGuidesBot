###  Naming Conventions

#### Variable Naming

Rather interestingly, the opposite is true for variables. Unlike functions, our variables should be named from more to less specific the deeper we go into nested scopes.

> _You shouldn’t name your variables after their types for the same reason you wouldn’t name your pets 'dog' or 'cat'. – Dave Cheney_

Why should our variable names become less specific as we travel deeper into a function's scope? Simply put, as a variable's scope becomes smaller, it becomes increasingly clear for the reader what that variable represents, thereby eliminating the need for specific naming. In the example of the previous function `fileExtension`, we could even shorten the name of the variable `segments` to `s` if we wanted to. The context of the variable is so clear that it's unnecessary to explain it any further with longer variable names. Another good example of this is in nested for loops:

```go
func PrintBrandsInList(brands []BeerBrand) {
    for _, b := range brands { 
        fmt.Println(b)
    }
}
```

In the above example, the scope of the variable `b` is so small that we don't need to spend any additional brain power on remembering what exactly it represents. However, because the scope of `brands` is slightly larger, it helps for it to be more specific. When expanding the variable scope in the function below, this distinction becomes even more apparent:

```go
func BeerBrandListToBeerList(beerBrands []BeerBrand) []Beer {
    var beerList []Beer
    for _, brand := range beerBrands {
        for _, beer := range brand {
            beerList = append(beerList, beer)
        }
    }
    return beerList
}
```

Great! This function is easy to read. Now, let's apply the opposite \(i.e., wrong\) logic when naming our variables:

```go
func BeerBrandListToBeerList(b []BeerBrand) []Beer {
    var bl []Beer
    for _, beerBrand := range b {
        for _, beerBrandBeerName := range beerBrand {
            bl = append(bl, beerBrandBeerName)
        }
    }
    return bl
}
```

Even though it's possible to figure out what this function is doing, the excessive brevity of the variable names makes it difficult to follow the logic as we travel deeper. This could very well spiral into full-blown confusion because we're mixing short and long variable names inconsistently.
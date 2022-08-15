/* Composite design pattern */

/* calculate takes any type of object as an arg */

function calculate (product: Product): number {
  return product.calc()
}

abstract class Product {

  public add(product: Product): void {}
  public remove(product: Product): void {}

  public abstract calc(): number
}

class Box extends Product {
  protected products: Product[] = []

  constructor(components: Product[]) {
    super()
    this.products = components
  }

  public add(component: Product) {
    this.products.push(component)
  }

  public remove(component: Product) {
    let index = this.products.indexOf(component)
    this.products.splice(index, 1)
  }

  public calc(): number {
    let price: number = 0
    for (let p of this.products) {
      price += p.calc()
    }
    return price
  }
}

class Fragrance extends Product {
  public price: number
  constructor (price: number) {
    super()
    this.price = price
  }
  public calc(): number {
    return this.price
  }
}

/* Say we have got 2 products with the corresponding prices -> 12$ and 30$ */
const product_0 = new Fragrance(12)
const product_1 = new Fragrance(30)

/* Now say we have got a small box with different products in it */

const box_0 = new Box([product_0, product_1])

/* Now we need to wrap all this staff into a large box */

const large_box = new Box([product_0, product_1, box_0])

/* prices of products */
console.log(calculate(box_0));
console.log(calculate(product_1));

console.log(calculate(large_box));




type Size = '' | 'S' | 'M' | 'L' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw Error(`${key} is empty`)
                break
                case 'number':
                    if (this[key] <= 0) throw Error(`${key} is zero`) 
                break
                default:
                    throw Error(`${typeof [key]} is not supported`)

            }
        }

        return true
    }

    toString() {
        //No Dry
        // if (this.name.length <= 0) throw Error("name is required")
        // if (this.price <= 0) throw Error("price is zero")
        // if (this.size.length <= 0) throw Error("size is empty")
        if (!this.isProductReady) return

        return `${this.name} ${this.price} ${this.size}`
    }
}

(() => {
    const book = new Product("blue pants", 12, 'S')
    console.log(book.toString())
})()

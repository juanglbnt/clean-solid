(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    
    class ProductService {
        getProduct(id: number) {
            console.log('product: ', {id, name: 'product'})
        }

        saveProduct(product: Product) {
            console.log('saving in database', product)
        }
    }

    class Mailer {
        public masterEmail: string = 'noreply@gmail.com'

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admin') {
            console.log('sending email to clients', template)
        }
    }

    class ProductBloc {
        private productService: ProductService
        private mailer: Mailer

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService
            this.mailer = mailer
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product)
        }
    
        notifyClients() {
            this.mailer.sendEmail(['deafult-client@service.com'], 'to-clients')
        }
    }

    class CartBloc {
        private itemsInCart: Object[] = []

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const productService = new ProductService()
    const mailer = new Mailer()

    const productBloc = new ProductBloc(productService, mailer);
    const productBloc2 = new ProductBloc(productService, mailer)
    const cartBloc = new CartBloc()

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

    productBloc2.loadProduct(11)
    productBloc2.saveProduct({id: 11, name: 'sound bar'})
    productBloc2.notifyClients()
    cartBloc.addToCart(11)

    console.log(cartBloc)




})();
const products = [
    { product: 'laptop', type: 'electronics', quantity: 50, price: 15 },
    { product: 'chair', type: 'furniture', quantity: 30, price: 1 },
    { product: 'TV', type: 'electronics', quantity: 20, price: 7 },
    { product: 'BUS', type: 'vehicles', quantity: 10, price: 10 }
];

products.filter((product) => {
    if (product.type === 'electronics' && product.quantity > 10 && product.quantity > 10 && product.price < 15) {
        console.log(product);
    };
});
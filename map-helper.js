const colors = ['Blue','red','green'];

const products = [
    {
        name:'ball', type:'sports'
    },
    {
        name:'bat', type:'sports'
    },
    {
        name:'pen', type:'stationary'
    }
]

colors.map((color)=>{
    console.log(color);
});

products.map((product) => {
    if(product.name === 'ball'){
        console.log(product);
    };

})

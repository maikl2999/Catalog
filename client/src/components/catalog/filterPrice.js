const filter = (products, from, to) => {
    const result = products.filter(product => +(product.price) >= from && +(product.price) <= to);
    return result
}

export const filterPrice = (priceChack, products) => {

    const { price_0_20, price_20_30, price_30_50, price_50_100 } = priceChack;
    let renderProd = [];

    if(price_0_20) renderProd = [...renderProd, ...filter(products, 0, 20)];
    if(price_20_30) renderProd = [...renderProd, ...filter(products, 20, 30)]; 
    if(price_30_50) renderProd = [...renderProd, ...filter(products, 30, 50)]; 
    if(price_50_100) renderProd = [...renderProd, ...filter(products, 50, 100)]; 
    if(!price_0_20 && !price_20_30 && !price_30_50 && !price_50_100) renderProd = products;

    return renderProd;
}
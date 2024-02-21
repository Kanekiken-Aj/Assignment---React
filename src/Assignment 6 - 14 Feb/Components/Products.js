import React from 'react';

const Products = () => {
  // Placeholder data for products
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
    <div>
      <h2>List of Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong>: ${product.price}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Products;

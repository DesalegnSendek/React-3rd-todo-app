const products = [
  { id: 1, name: 'Shirt', price: 20 },
  { id: 2, name: 'Pants', price: 30 },
  { id: 3, name: 'Shoes', price: 50 },
];

function Product(props) {
  const { name, price } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

function Map() {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}

      
    </div>
  );
}

export default Map;

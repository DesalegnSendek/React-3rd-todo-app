//array of objects
const products = [
  { id: 1, name: 'Shirt', price: 20 },
  { id: 2, name: 'Pants', price: 30 },
  { id: 3, name: 'Shoes', price: 50 },
];

const animals = [
  { id: 1, name: 'Dog', canFly: false },
  { id: 2, name: 'Bird', canFly: true },
  { id: 3, name: 'Fish', canFly: false },
];

const fruits = ['apple', 'banana', 'orange'];

function Product(props) {
  const { name, price } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

function Animal(props) {
  const { name, canFly } = props;
  return (
    <div>
      <h3>{name}</h3>
      {canFly && <p>This animal can fly.</p>}
    </div>
  );
}




function Map() {
  return (
    <><div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
    
    <div>
      <h1>Animals</h1>
      {animals.map((animal) => (
        <Animal key={animal.id} name={animal.name} canFly={animal.canFly} />
      ))}
    </div>

    <div>
    <h1>Fruits</h1>
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul></div>
    </>
  );
}

export default Map;

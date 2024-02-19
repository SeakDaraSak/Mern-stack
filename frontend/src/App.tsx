import { sampleProduct } from "./data";

function App() {
  return (
    <>
      <div>
        <ul>
          {sampleProduct.map((product) => (
            <li
              className="flex flex-col items-center justify-center"
              key={product.slug}
            >
              <img src={product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <p>{product.price}$</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

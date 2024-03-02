import { sampleProduct } from "./data";

function App() {
  return (
    <>
      <div>
        <header className="flex justify-between p-5 bg-slate-800 text-white">
          <div>
            <a href="">Amazon</a>
          </div>
          <nav className="space-x-4">
            <a href="/cart">Cart</a>
            <a href="/signin">SignIn</a>
          </nav>
        </header>
      </div>

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

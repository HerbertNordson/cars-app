import React, { useEffect, useState } from "react";
import "./App.css";
import { CARS_BRAND_MOCK } from "./utils/constants";

function App() {
  const [cars, setCars] = useState([]);

  function handleCar() {
    const newCars = CARS_BRAND_MOCK.cars.map((item) => item);
    setCars(newCars);
  }

  useEffect(() => {
    handleCar();
  }, []);

  return (
    <div className="App">
      {cars.length > 0 &&
        cars.map((car) => (
          <article key={car.id}>
            <img src="" alt="" />
            <section>
              <header>
                <h1 className="font-semibold text-xl">{car.nome_modelo}</h1>
                <p className="font-medium opacity-75">{car.ano}</p>
              </header>
              <main>
                <div>
                  <p>Portas: {car.num_portas}</p>
                  <p>Combustivel: {car.combustivel}</p>
                </div>
                <hr />
                <div>
                  <p>Cor: {car.cor}</p>
                  <p>Preço: {car.valor}</p>
                </div>
              </main>
              <button>Comprar</button>
            </section>
          </article>
        ))}
    </div>
  );
}

export default App;

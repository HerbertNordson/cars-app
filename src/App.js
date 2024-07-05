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
    <div className="App min-h-screen">
      <main className="w-full h-full flex flex-col justify-center items-center p-4">
        <section className="flex flex-wrap justify-evenly gap-4 w-10/12">
          {cars.length > 0 &&
            cars.map((car) => (
              <article key={car.id} className="border border-gray-200 rounded-lg shadow">
                <img src="" alt="" />
                <section className="flex flex-col items-center my-2 gap-4">
                  <header className="mb-2">
                    <h1 className="font-semibold text-xl">{car.nome_modelo}</h1>
                    <p className="font-medium opacity-75">{car.ano}</p>
                  </header>
                  <main className="flex gap-2 divide-x-2 divide-slate-400/25">
                    <div className="flex flex-col justify-between items-center min-w-36 px-2">
                      <p className="text-sm">
                        Portas:
                        <span className="font-medium"> {car.num_portas}</span>
                      </p>
                      <p className="text-sm">
                        Combustivel:
                        <span className="font-medium"> {car.combustivel}</span>
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-center min-w-36 px-2">
                      <p className="text-sm">
                        Cor: <span className="font-medium"> {car.cor}</span>
                      </p>
                      <p className="text-sm">
                        Preço:{" "}
                        <span className="font-medium text-xl">
                          {" "}
                          {car.valor}
                        </span>
                      </p>
                    </div>
                  </main>
                  <button>Comprar</button>
                </section>
              </article>
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;

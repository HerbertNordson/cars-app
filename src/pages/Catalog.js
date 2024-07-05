import React, { useState } from "react";
import { Card } from "../components/Card";
import { useStoreContext } from "../context";
import { Loading } from "../components/Loading";
import { Filter } from "../components/Filter";
import { ModalRegister } from "../components/ModealRegister";

export const Catalog = () => {
  const [open, setOpen] = useState(false);

  const { cars, loading } = useStoreContext();

  return (
    <main className="w-full h-full flex flex-col justify-center p-4 w-base m-auto gap-10">
      <header className="flex justify-around items-end">
        <div>
          <h1 className="text-3xl">
            Bem-vindo ao{" "}
            <span className="text-5xl font-bold text-logo">CAR-TÁLOGO</span>
          </h1>
          <p className="text-xl">
            Seu mostruário de carros com os melhores preços do mercado!
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="bg-secundary py-2 px-4 ring-2 ring-secundary-500/50 rounded-sm font-medium hover:bg-logo"
            onClick={() => setOpen(!open)}
          >
            Cadastrar
          </button>
          {open && <ModalRegister />}
          <Filter />
        </div>
      </header>
      <section className="flex flex-wrap justify-center gap-8 ">
        {loading && <Loading />}
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={Math.random()}>
              {" "}
              <Card car={car} />
            </div>
          ))
        ) : (
          <p className="text-xl text-center">
            Nenhum carro deste foi encontrado!
          </p>
        )}
      </section>
    </main>
  );
};

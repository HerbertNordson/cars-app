import { transformPricePTBR } from "../utils/scripts";

export const Card = ({ car }) => {
  const { ano, combustivel, num_portas, cor, nome_modelo, valor } = car;

  return (
    <article className="border border-gray-200 rounded-lg shadow bg-secundary ">
      <img src="" alt="" />
      <section className="flex flex-col items-center my-2 gap-4">
        <header className="mb-2 text-center">
          <h1 className="font-semibold text-xl">{nome_modelo}</h1>
          <p className="font-medium opacity-75">{ano}</p>
        </header>
        <main className="flex gap-2 divide-x-2 divide-slate-400/25">
          <div className="flex flex-col justify-between items-center min-w-36 px-2">
            <p className="text-sm">
              Portas:
              <span className="font-medium"> {num_portas}</span>
            </p>
            <p className="text-sm">
              Combustivel:
              <span className="font-medium"> {combustivel}</span>
            </p>
          </div>
          <div className="flex flex-col justify-between items-center min-w-36 px-2">
            <p className="text-sm">
              Cor: <span className="font-medium"> {cor}</span>
            </p>
            <p className="text-sm">
              Preço:{" "}
              <span className="font-medium text-xl">
                {" "}
                <span className="text-sm">R$</span>
                {transformPricePTBR(valor)}
              </span>
            </p>
          </div>
        </main>
        <button>Comprar</button>
      </section>
    </article>
  );
};

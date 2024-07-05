import { useState } from "react";
import { SelectBrand } from "./SelectBrand";
import { CARS_BRAND_MOCK } from "../utils/constants";
import { useStoreContext } from "../context";

const FUEL = ["GASOLINA", "ETANOL", "FLEX", "DIESEL", "ELÉTRICO"];
const { cars: CARS } = CARS_BRAND_MOCK;

export const ModalRegister = ({ onclick }) => {
  const { cars, setCars } = useStoreContext();
  const [formData, setFormData] = useState({
    id: CARS.length + 1,
    timestamp_cadastro: Date.now(),
    ano: "",
    combustivel: "",
    nome_modelo: "",
    brand: "",
    modelo_id: "",
    cor: "",
    num_portas: "",
    valor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      return;
    }

    CARS.push(formData);
    localStorage.setItem("cars", JSON.stringify(CARS));
    setCars([...cars, formData]);
    onclick()
  };

  const isValidForm = () => {
    if (!/^\d{4}$/.test(formData.ano)) {
      alert("Por favor, insira um ano válido (ex: 2024).");
      return false;
    }

    if (!Number.isInteger(parseInt(formData.num_portas))) {
      alert("Por favor, insira um número inteiro para o número de portas.");
      return false;
    }

    if (isNaN(parseFloat(formData.valor))) {
      alert("Por favor, insira um preço válido.");
      return false;
    }

    return true;
  };

  function setValueBrand(value) {
    setFormData({ ...formData, brand: +value });
  }

  return (
    <div className="absolute inset-0 bg-color-op z-10">
      <div className="flex justify-center item-center flex-col w-full h-full">
        <div className="relative m-auto w-10/12 md:w-2/4 flex flex-col items-center justify-center bg-secundary py-2 rounded-xl">
          <header className="flex justify-between items-center mb-10 flex-col md:flex-row gap-2">
            <h1 className="text-2xl font-semibold">Cadastrar novo carro</h1>
          </header>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-4 gap-2 w-10/12 m-auto"
          >
            <label htmlFor="ano" className="font-medium">
              Ano do carro:
            </label>
            <input
              type="text"
              name="ano"
              id="ano"
              placeholder="Ex: 2024"
              className="bg-secundary border px-2"
              value={formData.year}
              onChange={handleChange}
              required
              pattern="\d{4}"
            />

            <label htmlFor="combustivel" className="font-medium">
              Tipo de combustível:
            </label>
            <select
              name="combustivel"
              id="combustivel"
              className="bg-secundary border px-2"
              value={formData.combustivel}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              {FUEL.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label htmlFor="nome_modelo" className="font-medium">
              Modelo:
            </label>
            <input
              type="text"
              name="nome_modelo"
              id="nome_modelo"
              className="bg-secundary border px-2"
              value={formData.nome_modelo}
              onChange={handleChange}
              required
            />

            <label htmlFor="brand" className="font-medium">
              Marca do carro:
            </label>
            <SelectBrand onclick={setValueBrand} all={false} />

            <label htmlFor="modelo_id" className="font-medium">
              Código do modelo:
            </label>
            <input
              type="number"
              name="modelo_id"
              id="modelo_id"
              className="bg-secundary border px-2"
              value={formData.modelo_id}
              onChange={handleChange}
              required
            />
            <label htmlFor="cor" className="font-medium">
              Cor do carro:
            </label>
            <input
              type="text"
              name="cor"
              id="cor"
              className="bg-secundary border px-2"
              value={formData.cor}
              onChange={handleChange}
              required
            />

            <label htmlFor="num_portas" className="font-medium">
              Número de portas:
            </label>
            <input
              type="number"
              name="num_portas"
              id="num_portas"
              className="bg-secundary border px-2"
              value={formData.num_portas}
              onChange={handleChange}
              required
            />

            <label htmlFor="valor" className="font-medium">
              Preço de venda:
            </label>
            <input
              type="number"
              name="valor"
              id="valor"
              className="bg-secundary border px-2"
              value={formData.valor}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="my-6 hover:bg-secundary py-2 px-4 ring-2 ring-secundary-500/50 rounded-sm font-medium bg-logo"
            >
              Cadastrar
            </button>
            <button
              onClick={onclick}
              type="button"
              className="my-2 bg-secundary py-2 px-4 ring-2 ring-secundary-500/50 rounded-sm font-medium hover:bg-logo"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

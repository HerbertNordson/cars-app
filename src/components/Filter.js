import { useStoreContext } from "../context";

export const Filter = () => {
  const { brands, filterCars } = useStoreContext();
  return (
    <section>
      <div>
        <label className="font-medium mr-2">Filtrar: </label>
        <select
          className="bg-secundary"
          onChange={(ev) => filterCars(ev.target.value)}
        >
        <option value={null} selected>TODAS</option>
          {brands.map((item) => (
            <option value={item.id}>{item.value}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

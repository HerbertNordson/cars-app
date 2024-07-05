import { useStoreContext } from "../context";
import { SelectBrand } from "./SelectBrand";

export const Filter = () => {
  const { filterCars } = useStoreContext();
  return (
    <section>
      <div>
        <label className="font-medium mr-2">Filtrar: </label>
        <SelectBrand onclick={filterCars} all={true}/>
      </div>
    </section>
  );
};

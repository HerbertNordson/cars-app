import { useStoreContext } from "../context";

export const SelectBrand = ({ onclick, all }) => {
  const { brands } = useStoreContext();

  return (
    <select
      name="brand"
      className="bg-secundary border  px-2"
      onChange={(ev) => onclick(ev.target.value)}
    >
      {all && (
        <option value={null} selected>
          TODAS
        </option>
      )}
      {brands.map((item) => (
        <option value={item.id}>{item.value}</option>
      ))}
    </select>
  );
};

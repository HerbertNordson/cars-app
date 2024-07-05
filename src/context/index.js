import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { CARS_BRAND_MOCK, BRANDS } from "../utils/constants";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cars: CAR } = CARS_BRAND_MOCK;

  const getCars = useCallback(
    function () {
      let newCars = [];
      if (localStorage.getItem("cars")) {
        const arr = JSON.parse(localStorage.getItem("cars"));
        newCars = arr.map((item) => item);
      } else {
        newCars = CAR.map((item) => item);
        localStorage.setItem("cars", JSON.stringify(newCars));
      }

      setCars(newCars);
      setLoading(false);
    },
    [CAR]
  );

  const getBrands = useCallback(function () {
    const brand = BRANDS.map((item) => item);
    localStorage.setItem("brands", JSON.stringify(brand));
    setBrands(brand);
  }, []);

  const filterCars = useCallback(
    function (brand) {
      setLoading(true);
      if (brand === "TODAS") return getCars();

      let carsFilter = []
      if (localStorage.getItem("cars")) {
        const arr = JSON.parse(localStorage.getItem("cars"));
        carsFilter = arr.filter((item) => item.brand === +brand);
      } else {
        carsFilter = CAR.filter((item) => item.brand === +brand);
      }
      
      setCars(carsFilter);
      setLoading(false);
    },
    [getCars, CAR]
  );

  useEffect(() => {
    getCars();
    getBrands();
  }, [getCars, getBrands]);

  const value = useMemo(
    () => ({
      cars,
      setCars,
      brands,
      loading,
      filterCars,
    }),
    [cars, setCars, brands, loading, filterCars]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;

export const useStoreContext = () => useContext(StoreContext);

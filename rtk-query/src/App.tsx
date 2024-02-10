import { useAppDispatch, useAppSelector } from "./types/reduxHooks";
import { changeCurrency } from "./features/appSlice";
import { useGetBitcoinDataQuery } from "./services/app";
import Wrapper from "./wrapper/App";

const INTERVAL_TIME = 5000;

export default function App() {
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector((state) => state.app);

  const { data, isLoading, error } = useGetBitcoinDataQuery(undefined, {
    pollingInterval: INTERVAL_TIME,
  });

  const handleCurrencySelection = (e: any) =>
    dispatch(changeCurrency(e.currentTarget.value));

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong.</div>;

  return (
    <Wrapper>
      <h1>BitcoinXchange</h1>
      <select value={currency} onChange={handleCurrencySelection}>
        {data &&
          Object.keys(data).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
      <div>
        <h2>
          {data && data[currency].symbol} {data && data[currency].last}
        </h2>
      </div>
    </Wrapper>
  );
}

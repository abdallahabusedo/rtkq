import { decrement, increment } from "@/app/redux/slices/counterSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
const WelcomePage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;

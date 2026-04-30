import Button from "./components/common/Button";
import TextField from "./components/common/TextField/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "./features/counter/counterSlice";
import type { RootState } from "./store/store";
import Dropdown from "./components/common/DropDown";
import MoreIcon from "@/assets/icon-vertical-ellipsis.svg";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  console.log(counter);

  return (
    <>
      <div className="padding-4 m-5 flex items-center gap-4">
        <img src="/kanban.png" alt="Logo" className="h-6 w-6" />
        <h1 className="text-[1.5rem] font-bold">Board Name</h1>
      </div>

      <h1 className="text-heading-xl text-main-purple">Board Name</h1>

      <p className="text-body-l">This is a description text.</p>
      <Button children={"Add Board"} size="sm" />
      <Button children={"Attention"} variant="secondary" size="md" />
      <Button children={"Add Board"} variant="destructive" size="lg" />
      <Button
        children={"Add Board"}
        variant="destructive"
        size="lg"
        isDisabled
      />
      <TextField
        label="Username"
        placeholder="Enter your username"
        required
        defaultValue="Muhammad"
        name="username"
      />
      <p className="text-center">Counter: {counter}</p>
      <Button
        onClick={() => dispatch(incrementByAmount(5))}
        children={"Increment by 5"}
      />
      <Button
        onClick={() => dispatch(decrementByAmount(3))}
        className="ml-2"
        isDisabled={counter - 3 < 0}
        variant="destructive"
        children={"Decrement by 3"}
      />
      <p className="text-heading-m">This is a test</p>
      <div className="bg-bg-card text-text-primary border-border-line rounded-lg border p-4">
        <h3>بناء الهيدر</h3>
      </div>
      <Dropdown
        items={[
          {
            id: "edit",
            label: "Edit Board",
            onClick: () => console.log("Edit Board clicked"),
            separator: true,
          },
          {
            id: "delete",
            label: "Delete Board",
            onClick: () => console.log("Delete Board clicked"),
            className: "text-destructive",
          },
        ]}
        trigger={
          <img src={MoreIcon} alt="More" className="cursor-pointer pl-20" />
        }
      />
    </>
  );
}

export default App;

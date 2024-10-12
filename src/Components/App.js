import { useState } from "react";
import { Logo } from "./Logo";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { PackingList } from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelSelectItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClean() {
    const confirm = window.confirm("Are you want to delete all items?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form AddItems={handelAddItem} />
      <PackingList
        items={items}
        deleteItem={handelDeleteItem}
        selectItem={handelSelectItem}
        cleanItems={handelClean}
      />
      <Stats items={items} />
    </div>
  );
}

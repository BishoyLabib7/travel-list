import { useState } from "react";
import { Logo } from "./Logo";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
export default function App() {
  const [items, setItems] = useState([]);
  let i = 0;
  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelSelectItem(id) {
    const updateItems = items.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    const [currentItem] = updateItems.filter((item) => item.id === id);
    setItems(updateItems);
  }

  function handelClean() {
    const confirm = window.confirm("Are you want to delete all items?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form AddItems={handelAddItem} i={items.length} />
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

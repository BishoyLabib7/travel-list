import { useState } from "react";

export function Form({ AddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmint(e) {
    e.preventDefault();

    // Don't save a empty description
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    AddItems(newItem);

    // Default Mode
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmint}>
      <h3>What do you need for your 😍 trip</h3>

      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Items...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>ADD</button>
    </form>
  );
}

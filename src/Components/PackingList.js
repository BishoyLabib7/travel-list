import { useState } from "react";

export function PackingList({ items, deleteItem, selectItem, cleanItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems = items.slice();
  if (sortBy === "description")
    sortItems.sort((a, b) => a.description.localeCompare(b.description));
  else sortItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            selectItem={selectItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <span>
          <button onClick={cleanItems}>ClearList</button>
        </span>
      </div>
    </div>
  );
}
function Item({ item, deleteItem, selectItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => selectItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

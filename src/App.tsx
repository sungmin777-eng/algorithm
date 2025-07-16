import React, { useState } from 'react';

type Item = {
  id: number;
  name: string;
};

export const MapUpdateExample: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
  ]);

  const [list, setList] = useState<number[]>([1, 2, 3]);

  const updateItem = (id: number) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, name: 'updated' } : item
    );
    setItems(updated);
  };

  const addToList = () => {
    const newItem = 100;
    setList((prev) => [...prev.map((n) => n + 1), newItem]);
  };

  return (
    <div>
      <h2>📌 Updated Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          {item.id}: {item.name}
          <button onClick={() => updateItem(item.id)}>Update</button>
        </div>
      ))}

      <h2>📌 Number List</h2>
      <button onClick={addToList}>+1 All & Add 100</button>
      <div>{list.join(', ')}</div>
    </div>
  );
};

import { useState } from "react";

export const Cart = ({ items }) => {
  // counts will hold counts per itemId, e.g. { 1: 2, 2: 1 }
  const [counts, setCounts] = useState({});

  const increment = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts(prev => {
      const currentCount = prev[id] || 1;
      if (currentCount === 1) {
        alert("Item can't be reduced further");
        return prev;
      }
      return {
        ...prev,
        [id]: currentCount - 1,
      };
    });
  };

  const removeItem = (id) => {
    alert("Sorry for the inconvenience, app is in maintenance");
    // You can later implement actual remove logic here
  };

  if (!items || items.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: "flex", marginTop: 50 }}>
          <div>
            <img
              src="/image.png"
              alt="remove"
              style={{ width: 50, height: 50, marginRight: 100, marginTop: 25, cursor: 'pointer' }}
              onClick={() => removeItem(item.id)}
            />
          </div>
          <div>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: 100, height: 100, marginRight: 200 }}
            />
          </div>
          <div>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
          <div style={{ display: "flex", marginLeft: 20, alignItems: "center" }}>
            <button onClick={() => increment(item.id)} className="addrembut">+</button>
            <p style={{marginLeft: 10, marginRight: 10}}>{counts[item.id] || 1}</p>
            <button onClick={() => decrement(item.id)} className="addrembut">-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

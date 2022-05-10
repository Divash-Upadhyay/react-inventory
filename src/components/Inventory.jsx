import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
  // Create add and remove functions here that changes the

  const handleInventory = (item, value) => {
    if(inv[item] === 0 && value == -1){
      return
    }else{
      if (item == "books") {
        setInv({ ...inv, books: inv.books + value })
      } else if (item == "notebooks") {
        setInv({ ...inv, notebooks: inv.notebooks + value })
      } else if (item == "pens") {
        setInv({ ...inv, pens: inv.pens + value })
      }
    }
  }
  // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => handleInventory("books", 1)}>+</button>
        <button className="circlularButton" onClick={() => handleInventory("books", -1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => handleInventory("notebooks", 1)}>+</button>
        <button className="circlularButton" onClick={() => handleInventory("notebooks", -1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => handleInventory("pens", 1)}>+</button>
        <button className="circlularButton" onClick={() => handleInventory("pens", -1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens}
    </div>
  );
};

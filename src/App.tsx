import { useState, useEffect } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Content from "./Content";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import "./index.css";

type TodoItem = {
  id: number;
  checked: boolean;
  item: string;
};

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>(() => {
    const stored = localStorage.getItem("todoList");
    return stored ? (JSON.parse(stored) as TodoItem[]) : [];
  });
  const [newItems, setNewItems] = useState<string>("");
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);

  const handleCheck = (id: number): void => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id: number): void => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const addItem = (item: string): void => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem: TodoItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void  => {
    e.preventDefault();
    if (!newItems) return;
    addItem(newItems);
    setNewItems("");
  };

  return (
    <div className="notebook-bg">
      <div className="notebook-page">
        <Header />
        <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
        <AddItem
          newItems={newItems}
          setNewItems={setNewItems}
          handleSubmit={handleSubmit}
        />
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(searchItem.toLowerCase())
          )}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </div>
  );
};

export default App;

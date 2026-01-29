import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./Content";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import "./index.css";
const App = () => {
    const [items, setItems] = useState(() => {
        const stored = localStorage.getItem("todoList");
        return stored ? JSON.parse(stored) : [];
    });
    const [newItems, setNewItems] = useState("");
    const [searchItem, setSearchItem] = useState("");
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(items));
    }, [items]);
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? Object.assign(Object.assign({}, item), { checked: !item.checked }) : item);
        setItems(listItems);
    };
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    };
    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItems)
            return;
        addItem(newItems);
        setNewItems("");
    };
    return (_jsx("div", { className: "notebook-bg", children: _jsxs("div", { className: "notebook-page", children: [_jsx(Header, {}), _jsx(SearchItem, { searchItem: searchItem, setSearchItem: setSearchItem }), _jsx(AddItem, { newItems: newItems, setNewItems: setNewItems, handleSubmit: handleSubmit }), _jsx(Content, { items: items.filter((item) => item.item.toLowerCase().includes(searchItem.toLowerCase())), setItems: setItems, handleCheck: handleCheck, handleDelete: handleDelete }), _jsx(Footer, { length: items.length })] }) }));
};
export default App;

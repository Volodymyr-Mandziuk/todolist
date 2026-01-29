import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaTrashAlt } from "react-icons/fa";
const Content = ({ items, 
// setItems,
handleCheck, handleDelete, }) => {
    return (_jsx("main", { children: items.length ? (_jsx("ul", { children: items.map((item) => (_jsxs("li", { className: "item", children: [_jsx("input", { type: "checkbox", checked: item.checked, onChange: () => handleCheck(item.id) }), _jsx("label", { className: item.checked ? "checked" : "", onDoubleClick: () => handleCheck(item.id), children: item.item }), _jsx(FaTrashAlt, { role: "button", tabIndex: 0, onClick: () => handleDelete(item.id) })] }, item.id))) })) : (_jsx("p", { className: "empty", children: "Your list is empty!" })) }));
};
export default Content;

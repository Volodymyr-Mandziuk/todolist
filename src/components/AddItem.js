import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
const AddItem = ({ newItems, setNewItems, handleSubmit }) => {
    const inputRef = useRef(null);
    return (_jsxs("form", { className: "addForm", onSubmit: handleSubmit, children: [_jsx("input", { type: "text", autoFocus: true, ref: inputRef, id: "addForm", placeholder: "Add item", required: true, value: newItems, onChange: (e) => setNewItems(e.target.value) }), _jsx("button", { type: "submit", "aria-label": "Add item", onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, children: _jsx(FaPlus, {}) })] }));
};
export default AddItem;

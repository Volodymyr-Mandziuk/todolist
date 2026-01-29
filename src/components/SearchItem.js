import { jsx as _jsx } from "react/jsx-runtime";
const SearchItem = ({ searchItem, setSearchItem, }) => {
    return (_jsx("form", { className: "searchForm", onSubmit: (e) => e.preventDefault(), children: _jsx("input", { type: "text", role: "searchBox", placeholder: "Search Item", value: searchItem, onChange: (e) => setSearchItem(e.target.value) }) }));
};
export default SearchItem;

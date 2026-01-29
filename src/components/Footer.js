import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Footer = ({ length }) => {
    const year = new Date();
    return _jsxs("div", { className: "footer", children: [_jsxs("p", { className: "total-items", children: ["Total ", length, " ", length <= 1 ? "item" : "items"] }), _jsx("p", { className: "year", children: year.getFullYear() })] });
};
export default Footer;

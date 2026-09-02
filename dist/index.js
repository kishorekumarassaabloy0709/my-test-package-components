'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var lucideReact = require('lucide-react');
var dialog = require('primereact/dialog');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_button__sRq-Y {\r\n  border: none;\r\n  border-radius: 6px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n  font-family: inherit;\r\n}\r\n\r\n.Button-module_button__sRq-Y:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n.Button-module_button__sRq-Y:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.Button-module_button__sRq-Y:disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n\r\n/* Variants */\r\n.Button-module_primary__WOvcD {\r\n  background-color: #3b82f6;\r\n  color: white;\r\n}\r\n\r\n.Button-module_primary__WOvcD:hover:not(:disabled) {\r\n  background-color: #2563eb;\r\n}\r\n\r\n.Button-module_secondary__JoOEb {\r\n  background-color: #e5e7eb;\r\n  color: #1f2937;\r\n}\r\n\r\n.Button-module_secondary__JoOEb:hover:not(:disabled) {\r\n  background-color: #d1d5db;\r\n}\r\n\r\n.Button-module_danger__9Ophv {\r\n  background-color: #ef4444;\r\n  color: white;\r\n}\r\n\r\n.Button-module_danger__9Ophv:hover:not(:disabled) {\r\n  background-color: #dc2626;\r\n}\r\n\r\n/* Sizes */\r\n.Button-module_sm__wautS {\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n}\r\n\r\n.Button-module_md__wa3uJ {\r\n  padding: 10px 16px;\r\n  font-size: 16px;\r\n}\r\n\r\n.Button-module_lg__ACCPs {\r\n  padding: 12px 24px;\r\n  font-size: 18px;\r\n}\r\n";
var styles = {"button":"Button-module_button__sRq-Y","primary":"Button-module_primary__WOvcD","secondary":"Button-module_secondary__JoOEb","danger":"Button-module_danger__9Ophv","sm":"Button-module_sm__wautS","md":"Button-module_md__wa3uJ","lg":"Button-module_lg__ACCPs"};
styleInject(css_248z);

const Button = React.forwardRef((_a, ref) => {
    var { variant = 'primary', size = 'md', className, children } = _a, props = __rest(_a, ["variant", "size", "className", "children"]);
    return (jsxRuntime.jsx("button", Object.assign({ ref: ref, className: `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}` }, props, { children: children })));
});
Button.displayName = 'Button';

const OBJECT_TYPES = [
    "Account",
    "CAM",
    "CAM Brand",
    "Contact",
    "Opportunity",
    "Contract",
    "AlertCircle",
];
function TicketCard({ ticket }) {
    return (jsxRuntime.jsxs("div", { className: "border-b border-slate-200 py-4 last:border-0", style: { alignItems: "left", textAlign: "left", color: "black" }, children: [jsxRuntime.jsx("div", { className: "mb-2", children: jsxRuntime.jsxs("div", { className: "font-semibold text-blue-600 text-sky-800 hover:underline", style: { display: "flex", alignItems: "left", textAlign: "left" }, children: [jsxRuntime.jsx("i", { className: "pi pi-globe mr-2 bg-pink-300 text-white", style: {
                                fontSize: "1.6rem",
                                padding: ".5rem",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "2.5rem",
                                height: "2.5rem",
                            } }), ticket.id] }) }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { className: "font-medium text-slate-500", children: "Object Type: " }), jsxRuntime.jsx("span", { children: ticket.objectType }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("span", { className: "font-medium text-slate-500", children: "Subject: " }), jsxRuntime.jsx("span", { children: ticket.subject }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("span", { className: "font-medium text-slate-500", children: "Status: " }), jsxRuntime.jsx("span", { children: ticket.status }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("span", { className: "font-medium text-slate-500", children: "Last Modified By:" }), jsxRuntime.jsx("br", {}), jsxRuntime.jsxs("span", { children: [ticket.modifiedBy, ", ", ticket.modifiedOn] })] })] }));
}
function Card({ ticketsApiUrl = "/api/tickets", className }) {
    const [objectType, setObjectType] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [tickets, setTickets] = React.useState([]);
    const [ticketsLoading, setTicketsLoading] = React.useState(true);
    const [files, setFiles] = React.useState([]);
    const [isDragging, setIsDragging] = React.useState(false);
    const fileInputRef = React.useRef(null);
    const [formMessage, setFormMessage] = React.useState(null);
    const [submitting, setSubmitting] = React.useState(false);
    React.useEffect(() => {
        fetch(ticketsApiUrl)
            .then((res) => res.json())
            .then((data) => setTickets(data.tickets || []))
            .catch(() => setTickets([]))
            .finally(() => setTicketsLoading(false));
    }, [ticketsApiUrl]);
    const addFiles = (fileList) => {
        const newFiles = Array.from(fileList).map((f) => ({
            name: f.name,
            size: f.size,
        }));
        setFiles((prev) => [...prev, ...newFiles]);
    };
    const handleFileInputChange = (e) => {
        var _a;
        if ((_a = e.target.files) === null || _a === void 0 ? void 0 : _a.length)
            addFiles(e.target.files);
        e.target.value = "";
    };
    const handleDrop = (e) => {
        var _a;
        e.preventDefault();
        setIsDragging(false);
        if ((_a = e.dataTransfer.files) === null || _a === void 0 ? void 0 : _a.length)
            addFiles(e.dataTransfer.files);
    };
    const removeFile = (name) => {
        setFiles((prev) => prev.filter((f) => f.name !== name));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isMissing = !objectType.trim() || !subject.trim() || !description.trim();
        if (isMissing) {
            setFormMessage({
                type: "error",
                text: "Please fill all mandatory fields.",
            });
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch(ticketsApiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ objectType, subject, description }),
            });
            if (!res.ok)
                throw new Error("Failed to create ticket");
            const data = await res.json();
            setTickets((prev) => [data.ticket, ...prev]);
            setObjectType("");
            setSubject("");
            setDescription("");
            setFiles([]);
            setFormMessage({
                type: "success",
                text: "Ticket submitted successfully.",
            });
        }
        catch (_a) {
            setFormMessage({
                type: "error",
                text: "Something went wrong submitting the ticket. Please try again.",
            });
        }
        finally {
            setSubmitting(false);
            setTimeout(() => setFormMessage(null), 4000);
        }
    };
    return (jsxRuntime.jsx("div", { className: `min-h-screen bg-[#cfe0f7] p-4 ${className !== null && className !== void 0 ? className : ""}`, children: jsxRuntime.jsx("div", { className: "w-full p-4", children: jsxRuntime.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [jsxRuntime.jsxs("div", { className: "rounded border bg-white w-600", style: {
                            width: "700px",
                            textAlign: "left",
                            height: "550px",
                            color: "black",
                        }, children: [jsxRuntime.jsx("div", { className: "border-b bg-slate-50 pt-0", children: jsxRuntime.jsx("h2", { className: "font-semibold text-slate-800", style: {
                                        width: "100%",
                                        textAlign: "center",
                                        background: "rgb(243, 243, 243)",
                                        fontWeight: "bold",
                                        padding: "0.5rem 0",
                                        lineHeight: "1.5",
                                    }, children: "Request a Change or Report an Issue" }) }), jsxRuntime.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-4", children: [jsxRuntime.jsx("div", { style: { paddingBottom: "20px" }, children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("label", { className: "mb-3 pb-2", children: [jsxRuntime.jsx("span", { className: "text-red-600", children: "*" }), " Object Type Or Tab Name"] }), jsxRuntime.jsx("div", { className: "relative", children: jsxRuntime.jsxs("select", { value: objectType, onChange: (e) => setObjectType(e.target.value), className: "w-full rounded border px-3 py-2 pr-8 appearance-none", children: [jsxRuntime.jsx("option", { value: "", children: "--None--" }), OBJECT_TYPES.map((item) => (jsxRuntime.jsx("option", { value: item, children: item }, item)))] }) })] }) }), jsxRuntime.jsxs("div", { style: { paddingBottom: "20px" }, children: [jsxRuntime.jsxs("label", { children: [jsxRuntime.jsx("span", { className: "text-red-600", children: "*" }), " Subject"] }), jsxRuntime.jsx("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "w-full rounded border px-3 py-2" })] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("label", { className: "mb-1", children: [jsxRuntime.jsx("span", { className: "text-red-600", children: "*" }), " Description"] }), jsxRuntime.jsx("textarea", { rows: 6, value: description, onChange: (e) => setDescription(e.target.value), className: "w-full border px-3 py-2" })] }), jsxRuntime.jsxs("div", { className: "border-t pt-4", children: [jsxRuntime.jsx("p", { children: "Optional: Add documents or screenshots" }), jsxRuntime.jsxs("div", { onDragOver: (e) => {
                                                    e.preventDefault();
                                                    setIsDragging(true);
                                                }, onDragLeave: () => setIsDragging(false), onDrop: handleDrop, className: `flex flex-wrap items-center gap-3 rounded border px-3 py-2 ${isDragging
                                                    ? "border-blue-400 bg-blue-50"
                                                    : "border-slate-300"}`, children: [jsxRuntime.jsxs("button", { type: "button", onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, className: "flex items-center gap-2 rounded px-3 py-1.5 text-blue-600 hover:bg-blue-50", children: [jsxRuntime.jsx(lucideReact.UploadCloud, { size: 14 }), "Upload Files"] }), jsxRuntime.jsx("span", { className: "text-slate-500", children: "Or drop files" }), jsxRuntime.jsx("input", { ref: fileInputRef, type: "file", multiple: true, onChange: handleFileInputChange, className: "hidden" })] }), jsxRuntime.jsx("p", { className: "mt-2 text-sm font-medium text-red-600", children: "Note: You can drop or select several files at once." }), files.length > 0 && (jsxRuntime.jsx("ul", { className: "mt-2 space-y-1", children: files.map((f) => (jsxRuntime.jsxs("li", { className: "flex items-center justify-between rounded bg-slate-50 px-3 py-1.5 text-sm text-slate-700", children: [jsxRuntime.jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [jsxRuntime.jsx(lucideReact.FileText, { size: 14, className: "shrink-0 text-slate-400" }), jsxRuntime.jsx("span", { className: "truncate", children: f.name })] }), jsxRuntime.jsx("button", { type: "button", onClick: () => removeFile(f.name), className: "ml-2 shrink-0 text-slate-400 hover:text-red-500", "aria-label": `Remove ${f.name}`, children: jsxRuntime.jsx(lucideReact.X, { size: 14 }) })] }, f.name))) }))] }), formMessage && (jsxRuntime.jsx(dialog.Dialog, { style: { width: "28vw", textAlign: "center" }, header: jsxRuntime.jsx("div", { style: {
                                                background: "rgb(243, 243, 243)",
                                                fontWeight: "bold",
                                            }, children: formMessage.type === "success"
                                                ? "Success"
                                                : "Validation Error" }), visible: !!formMessage, onHide: () => setFormMessage(null), children: jsxRuntime.jsxs("div", { style: { justifyItems: "center" }, children: [jsxRuntime.jsx("p", { style: {
                                                        color: formMessage.type === "success"
                                                            ? "#15803d"
                                                            : "#dc2626",
                                                        marginBottom: "1rem",
                                                    }, children: formMessage.text }), jsxRuntime.jsx("div", { className: "flex mt-4", children: jsxRuntime.jsx("div", { style: {
                                                            display: "flex",
                                                            gap: "1rem",
                                                            paddingBottom: "20px",
                                                        }, children: jsxRuntime.jsx("button", { type: "button", onClick: () => setFormMessage(null), className: "bg-blue-500 text-white px-4 py-2 rounded-md", children: "OK" }) }) })] }) })), jsxRuntime.jsx("div", { className: "flex justify-end", style: { justifyContent: "center" }, children: jsxRuntime.jsx("button", { type: "submit", className: "flex items-center rounded broder bg-blue-600 px-3 py-2 text-white hover:bg-blue-700", disabled: submitting, children: submitting ? "Saving..." : "Save" }) })] })] }), jsxRuntime.jsx("div", { className: "min-w-0", children: jsxRuntime.jsxs("div", { className: "rounded bg-white", style: { width: "690px" }, children: [jsxRuntime.jsx("div", { className: "border-b bg-slate-50 py-1", children: jsxRuntime.jsxs("h2", { className: "font-semibold text-slate-800", style: {
                                            width: "100%",
                                            textAlign: "center",
                                            background: "rgb(243, 243, 243)",
                                            fontWeight: "bold",
                                            padding: "0.5rem 0",
                                            lineHeight: "1.5",
                                            color: "black",
                                        }, children: ["My Open Tickets (", tickets.length, ")"] }) }), jsxRuntime.jsxs("div", { style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(2, 1fr)",
                                        gap: "16px",
                                        paddingLeft: "20px",
                                    }, children: [ticketsLoading && (jsxRuntime.jsx("p", { className: "p-4 text-slate-500", children: "Loading tickets..." })), !ticketsLoading &&
                                            tickets.map((ticket) => (jsxRuntime.jsx(TicketCard, { ticket: ticket }, ticket.id)))] })] }) })] }) }) }));
}
Card.displayName = "Card";

exports.Button = Button;
exports.Card = Card;
//# sourceMappingURL=index.js.map

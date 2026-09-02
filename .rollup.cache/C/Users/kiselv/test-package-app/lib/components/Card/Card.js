"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { UploadCloud, X, FileText } from "lucide-react";
import { Dialog } from "primereact/dialog";
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
    return (_jsxs("div", { className: "border-b border-slate-200 py-4 last:border-0", style: { alignItems: "left", textAlign: "left", color: "black" }, children: [_jsx("div", { className: "mb-2", children: _jsxs("div", { className: "font-semibold text-blue-600 text-sky-800 hover:underline", style: { display: "flex", alignItems: "left", textAlign: "left" }, children: [_jsx("i", { className: "pi pi-globe mr-2 bg-pink-300 text-white", style: {
                                fontSize: "1.6rem",
                                padding: ".5rem",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "2.5rem",
                                height: "2.5rem",
                            } }), ticket.id] }) }), _jsxs("div", { children: [_jsx("span", { className: "font-medium text-slate-500", children: "Object Type: " }), _jsx("span", { children: ticket.objectType }), _jsx("br", {}), _jsx("span", { className: "font-medium text-slate-500", children: "Subject: " }), _jsx("span", { children: ticket.subject }), _jsx("br", {}), _jsx("span", { className: "font-medium text-slate-500", children: "Status: " }), _jsx("span", { children: ticket.status }), _jsx("br", {}), _jsx("span", { className: "font-medium text-slate-500", children: "Last Modified By:" }), _jsx("br", {}), _jsxs("span", { children: [ticket.modifiedBy, ", ", ticket.modifiedOn] })] })] }));
}
export function Card({ ticketsApiUrl = "/api/tickets", className }) {
    const [objectType, setObjectType] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [tickets, setTickets] = useState([]);
    const [ticketsLoading, setTicketsLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const [formMessage, setFormMessage] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    useEffect(() => {
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
    return (_jsx("div", { className: `min-h-screen bg-[#cfe0f7] p-4 ${className !== null && className !== void 0 ? className : ""}`, children: _jsx("div", { className: "w-full p-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "rounded border bg-white w-600", style: {
                            width: "700px",
                            textAlign: "left",
                            height: "550px",
                            color: "black",
                        }, children: [_jsx("div", { className: "border-b bg-slate-50 pt-0", children: _jsx("h2", { className: "font-semibold text-slate-800", style: {
                                        width: "100%",
                                        textAlign: "center",
                                        background: "rgb(243, 243, 243)",
                                        fontWeight: "bold",
                                        padding: "0.5rem 0",
                                        lineHeight: "1.5",
                                    }, children: "Request a Change or Report an Issue" }) }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 p-4", children: [_jsx("div", { style: { paddingBottom: "20px" }, children: _jsxs("div", { children: [_jsxs("label", { className: "mb-3 pb-2", children: [_jsx("span", { className: "text-red-600", children: "*" }), " Object Type Or Tab Name"] }), _jsx("div", { className: "relative", children: _jsxs("select", { value: objectType, onChange: (e) => setObjectType(e.target.value), className: "w-full rounded border px-3 py-2 pr-8 appearance-none", children: [_jsx("option", { value: "", children: "--None--" }), OBJECT_TYPES.map((item) => (_jsx("option", { value: item, children: item }, item)))] }) })] }) }), _jsxs("div", { style: { paddingBottom: "20px" }, children: [_jsxs("label", { children: [_jsx("span", { className: "text-red-600", children: "*" }), " Subject"] }), _jsx("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "w-full rounded border px-3 py-2" })] }), _jsxs("div", { children: [_jsxs("label", { className: "mb-1", children: [_jsx("span", { className: "text-red-600", children: "*" }), " Description"] }), _jsx("textarea", { rows: 6, value: description, onChange: (e) => setDescription(e.target.value), className: "w-full border px-3 py-2" })] }), _jsxs("div", { className: "border-t pt-4", children: [_jsx("p", { children: "Optional: Add documents or screenshots" }), _jsxs("div", { onDragOver: (e) => {
                                                    e.preventDefault();
                                                    setIsDragging(true);
                                                }, onDragLeave: () => setIsDragging(false), onDrop: handleDrop, className: `flex flex-wrap items-center gap-3 rounded border px-3 py-2 ${isDragging
                                                    ? "border-blue-400 bg-blue-50"
                                                    : "border-slate-300"}`, children: [_jsxs("button", { type: "button", onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, className: "flex items-center gap-2 rounded px-3 py-1.5 text-blue-600 hover:bg-blue-50", children: [_jsx(UploadCloud, { size: 14 }), "Upload Files"] }), _jsx("span", { className: "text-slate-500", children: "Or drop files" }), _jsx("input", { ref: fileInputRef, type: "file", multiple: true, onChange: handleFileInputChange, className: "hidden" })] }), _jsx("p", { className: "mt-2 text-sm font-medium text-red-600", children: "Note: You can drop or select several files at once." }), files.length > 0 && (_jsx("ul", { className: "mt-2 space-y-1", children: files.map((f) => (_jsxs("li", { className: "flex items-center justify-between rounded bg-slate-50 px-3 py-1.5 text-sm text-slate-700", children: [_jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [_jsx(FileText, { size: 14, className: "shrink-0 text-slate-400" }), _jsx("span", { className: "truncate", children: f.name })] }), _jsx("button", { type: "button", onClick: () => removeFile(f.name), className: "ml-2 shrink-0 text-slate-400 hover:text-red-500", "aria-label": `Remove ${f.name}`, children: _jsx(X, { size: 14 }) })] }, f.name))) }))] }), formMessage && (_jsx(Dialog, { style: { width: "28vw", textAlign: "center" }, header: _jsx("div", { style: {
                                                background: "rgb(243, 243, 243)",
                                                fontWeight: "bold",
                                            }, children: formMessage.type === "success"
                                                ? "Success"
                                                : "Validation Error" }), visible: !!formMessage, onHide: () => setFormMessage(null), children: _jsxs("div", { style: { justifyItems: "center" }, children: [_jsx("p", { style: {
                                                        color: formMessage.type === "success"
                                                            ? "#15803d"
                                                            : "#dc2626",
                                                        marginBottom: "1rem",
                                                    }, children: formMessage.text }), _jsx("div", { className: "flex mt-4", children: _jsx("div", { style: {
                                                            display: "flex",
                                                            gap: "1rem",
                                                            paddingBottom: "20px",
                                                        }, children: _jsx("button", { type: "button", onClick: () => setFormMessage(null), className: "bg-blue-500 text-white px-4 py-2 rounded-md", children: "OK" }) }) })] }) })), _jsx("div", { className: "flex justify-end", style: { justifyContent: "center" }, children: _jsx("button", { type: "submit", className: "flex items-center rounded broder bg-blue-600 px-3 py-2 text-white hover:bg-blue-700", disabled: submitting, children: submitting ? "Saving..." : "Save" }) })] })] }), _jsx("div", { className: "min-w-0", children: _jsxs("div", { className: "rounded bg-white", style: { width: "690px" }, children: [_jsx("div", { className: "border-b bg-slate-50 py-1", children: _jsxs("h2", { className: "font-semibold text-slate-800", style: {
                                            width: "100%",
                                            textAlign: "center",
                                            background: "rgb(243, 243, 243)",
                                            fontWeight: "bold",
                                            padding: "0.5rem 0",
                                            lineHeight: "1.5",
                                            color: "black",
                                        }, children: ["My Open Tickets (", tickets.length, ")"] }) }), _jsxs("div", { style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(2, 1fr)",
                                        gap: "16px",
                                        paddingLeft: "20px",
                                    }, children: [ticketsLoading && (_jsx("p", { className: "p-4 text-slate-500", children: "Loading tickets..." })), !ticketsLoading &&
                                            tickets.map((ticket) => (_jsx(TicketCard, { ticket: ticket }, ticket.id)))] })] }) })] }) }) }));
}
Card.displayName = "Card";
export default Card;
//# sourceMappingURL=Card.js.map
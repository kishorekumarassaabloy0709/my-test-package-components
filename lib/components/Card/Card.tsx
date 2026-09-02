"use client";

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

export interface Ticket {
  id: string;
  objectType: string;
  subject: string;
  status: string;
  modifiedBy: string;
  modifiedOn: string;
}

export interface CardProps {
  /** API endpoint for listing and creating tickets. Defaults to `/api/tickets`. */
  ticketsApiUrl?: string;
  className?: string;
}

function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div
      className="border-b border-slate-200 py-4 last:border-0"
      style={{ alignItems: "left", textAlign: "left", color: "black" }}
    >
      <div className="mb-2">
        <div
          className="font-semibold text-blue-600 text-sky-800 hover:underline"
          style={{ display: "flex", alignItems: "left", textAlign: "left" }}
        >
          <i
            className="pi pi-globe mr-2 bg-pink-300 text-white"
            style={{
              fontSize: "1.6rem",
              padding: ".5rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "2.5rem",
              height: "2.5rem",
            }}
          />
          {ticket.id}
        </div>
      </div>

      <div>
        <span className="font-medium text-slate-500">Object Type: </span>
        <span>{ticket.objectType}</span>
        <br />
        <span className="font-medium text-slate-500">Subject: </span>
        <span>{ticket.subject}</span>
        <br />
        <span className="font-medium text-slate-500">Status: </span>
        <span>{ticket.status}</span>
        <br />
        <span className="font-medium text-slate-500">Last Modified By:</span>
        <br />
        <span>
          {ticket.modifiedBy}, {ticket.modifiedOn}
        </span>
      </div>
    </div>
  );
}

export function Card({ ticketsApiUrl = "/api/tickets", className }: CardProps) {
  const [objectType, setObjectType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [files, setFiles] = useState<{ name: string; size: number }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(ticketsApiUrl)
      .then((res) => res.json())
      .then((data) => setTickets(data.tickets || []))
      .catch(() => setTickets([]))
      .finally(() => setTicketsLoading(false));
  }, [ticketsApiUrl]);

  const addFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList).map((f) => ({
      name: f.name,
      size: f.size,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) addFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isMissing =
      !objectType.trim() || !subject.trim() || !description.trim();

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

      if (!res.ok) throw new Error("Failed to create ticket");

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
    } catch {
      setFormMessage({
        type: "error",
        text: "Something went wrong submitting the ticket. Please try again.",
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setFormMessage(null), 4000);
    }
  };

  return (
    <div className={`min-h-screen bg-[#cfe0f7] p-4 ${className ?? ""}`}>
      <div className="w-full p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="rounded border bg-white w-600"
            style={{
              width: "700px",
              textAlign: "left",
              height: "550px",
              color: "black",
            }}
          >
            <div className="border-b bg-slate-50 pt-0">
              <h2
                className="font-semibold text-slate-800"
                style={{
                  width: "100%",
                  textAlign: "center",
                  background: "rgb(243, 243, 243)",
                  fontWeight: "bold",
                  padding: "0.5rem 0",
                  lineHeight: "1.5",
                }}
              >
                Request a Change or Report an Issue
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-4">
              <div style={{ paddingBottom: "20px" }}>
                <div>
                  <label className="mb-3 pb-2">
                    <span className="text-red-600">*</span> Object Type Or Tab
                    Name
                  </label>
                  <div className="relative">
                    <select
                      value={objectType}
                      onChange={(e) => setObjectType(e.target.value)}
                      className="w-full rounded border px-3 py-2 pr-8 appearance-none"
                    >
                      <option value="">--None--</option>
                      {OBJECT_TYPES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ paddingBottom: "20px" }}>
                <label>
                  <span className="text-red-600">*</span> Subject
                </label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded border px-3 py-2"
                />
              </div>

              <div>
                <label className="mb-1">
                  <span className="text-red-600">*</span> Description
                </label>
                <textarea
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border px-3 py-2"
                />
              </div>

              <div className="border-t pt-4">
                <p>Optional: Add documents or screenshots</p>

                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`flex flex-wrap items-center gap-3 rounded border px-3 py-2 ${
                    isDragging
                      ? "border-blue-400 bg-blue-50"
                      : "border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 rounded px-3 py-1.5 text-blue-600 hover:bg-blue-50"
                  >
                    <UploadCloud size={14} />
                    Upload Files
                  </button>
                  <span className="text-slate-500">Or drop files</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>

                <p className="mt-2 text-sm font-medium text-red-600">
                  Note: You can drop or select several files at once.
                </p>

                {files.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {files.map((f) => (
                      <li
                        key={f.name}
                        className="flex items-center justify-between rounded bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                      >
                        <span className="flex min-w-0 items-center gap-2">
                          <FileText
                            size={14}
                            className="shrink-0 text-slate-400"
                          />
                          <span className="truncate">{f.name}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(f.name)}
                          className="ml-2 shrink-0 text-slate-400 hover:text-red-500"
                          aria-label={`Remove ${f.name}`}
                        >
                          <X size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {formMessage && (
                <Dialog
                  style={{ width: "28vw", textAlign: "center" }}
                  header={
                    <div
                      style={{
                        background: "rgb(243, 243, 243)",
                        fontWeight: "bold",
                      }}
                    >
                      {formMessage.type === "success"
                        ? "Success"
                        : "Validation Error"}
                    </div>
                  }
                  visible={!!formMessage}
                  onHide={() => setFormMessage(null)}
                >
                  <div style={{ justifyItems: "center" }}>
                    <p
                      style={{
                        color:
                          formMessage.type === "success"
                            ? "#15803d"
                            : "#dc2626",
                        marginBottom: "1rem",
                      }}
                    >
                      {formMessage.text}
                    </p>
                    <div className="flex mt-4">
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          paddingBottom: "20px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setFormMessage(null)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              )}

              <div
                className="flex justify-end"
                style={{ justifyContent: "center" }}
              >
                <button
                  type="submit"
                  className="flex items-center rounded broder bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                  disabled={submitting}
                >
                  {submitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>

          <div className="min-w-0">
            <div className="rounded bg-white" style={{ width: "690px" }}>
              <div className="border-b bg-slate-50 py-1">
                <h2
                  className="font-semibold text-slate-800"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    background: "rgb(243, 243, 243)",
                    fontWeight: "bold",
                    padding: "0.5rem 0",
                    lineHeight: "1.5",
                    color: "black",
                  }}
                >
                  My Open Tickets ({tickets.length})
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  paddingLeft: "20px",
                }}
              >
                {ticketsLoading && (
                  <p className="p-4 text-slate-500">Loading tickets...</p>
                )}
                {!ticketsLoading &&
                  tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.displayName = "Card";

export default Card;

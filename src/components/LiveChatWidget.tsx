"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const WELCOME_MESSAGE =
  "Hi! \u{1F44B} How can we help you today? Our team typically responds within 5 minutes.";

const AUTO_REPLY =
  "Thanks for reaching out! One of our consultants will connect with you shortly. For immediate assistance, call us at (614) 718-9111.";

const QUICK_REPLIES = ["Workday Questions", "AWS Migration", "Get a Quote"];

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: WELCOME_MESSAGE, sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, scrollToBottom]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = {
        id: nextId.current++,
        text: text.trim(),
        sender: "user",
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: nextId.current++, text: AUTO_REPLY, sender: "bot" },
        ]);
      }, 1000);
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage],
  );

  return (
    <>
      {/* Chat Panel */}
      <div
        className={[
          "fixed bottom-20 right-6 z-40 w-80 max-h-96 flex flex-col",
          "rounded-2xl shadow-2xl overflow-hidden",
          "transition-all duration-300 origin-bottom-right",
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-label="Live chat"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "#0a1628" }}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-semibold text-white">
              Chat with ERPA
            </span>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-light-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-erpa-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={[
                "flex",
                msg.sender === "user" ? "justify-end" : "justify-start",
              ].join(" ")}
            >
              <div
                className={[
                  "max-w-[75%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                  msg.sender === "user"
                    ? "bg-erpa-light-blue text-white rounded-br-md"
                    : "bg-white text-erpa-gray-800 shadow-sm border border-erpa-gray-200 rounded-bl-md",
                ].join(" ")}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-white text-erpa-gray-600 shadow-sm border border-erpa-gray-200 rounded-2xl rounded-bl-md px-4 py-2.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-erpa-gray-600 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 bg-erpa-gray-600 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 bg-erpa-gray-600 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {/* Quick replies — only show when just the welcome message exists */}
          {messages.length === 1 && !typing && (
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_REPLIES.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => sendMessage(label)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-erpa-light-blue text-erpa-light-blue bg-white hover:bg-erpa-light-blue hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-light-blue focus-visible:ring-offset-1"
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-3 bg-white border-t border-erpa-gray-200"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 text-sm px-3 py-2 rounded-full bg-erpa-gray-50 border border-erpa-gray-200 text-erpa-gray-800 placeholder:text-erpa-gray-600 focus:outline-none focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-erpa-orange text-white hover:bg-orange-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-orange focus-visible:ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>

      {/* Floating Bubble */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className={[
          "fixed bottom-6 right-6 z-40",
          "flex items-center justify-center w-14 h-14",
          "rounded-full bg-erpa-orange text-white shadow-lg",
          "hover:bg-orange-600 hover:shadow-xl transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-orange focus-visible:ring-offset-2",
          !open ? "animate-pulse-glow" : "",
        ].join(" ")}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}

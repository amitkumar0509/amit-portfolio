"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm Amit's Digital Assistant. Ask me anything about his projects, hackathon wins, or tech stack.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/inference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage.content }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to fetch response:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I'm having trouble connecting to the server. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = ["Tell me about the UGC Project", "How did LingoLive work?", "What are your top skills?", "Contact info"];

  return (
    <section id="assistant" className="scroll-mt-24 py-16">
      <SectionHeader
        eyebrow="AI Assistant"
        title="Interactive Portfolio Chat"
        description="Explore my work through natural conversation using a custom-built retrieval engine."
      />
      
      <div className="mt-10 mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/60 shadow-2xl backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-800/60 bg-slate-900/50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/50">
                    <Bot size={20} />
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-slate-100">Portfolio Assistant</h3>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs text-slate-400">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {messages.map((m) => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                        {/* Avatar */}
                        <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${m.role === "user" ? "border-slate-700 bg-slate-800 text-slate-300" : "border-indigo-500/30 bg-indigo-500/10 text-indigo-400"}`}>
                            {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
                        </div>

                        {/* Bubble */}
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "user" ? "bg-slate-800 text-slate-100" : "bg-slate-900/80 text-slate-300 border border-slate-800/50"}`}>
                           {/* Handle simple markdown-like bolding */}
                           {m.content.split("**").map((part, i) => 
                              i % 2 === 1 ? <strong key={i} className="text-indigo-300">{part}</strong> : part
                           )}
                        </div>
                    </motion.div>
                ))}
                
                {isLoading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                         <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                            <Bot size={14} />
                        </div>
                        <div className="rounded-2xl bg-slate-900/80 border border-slate-800/50 px-4 py-3">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
                <div className="px-4 pb-4 flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                        <button 
                            key={s} 
                            onClick={() => { setInput(s); }}
                            className="flex items-center gap-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300"
                        >
                            <Sparkles size={10} />
                            {s}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="border-t border-slate-800/60 bg-slate-900/30 p-4">
                <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my projects..."
                        className="flex-1 rounded-xl border border-slate-700/60 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}

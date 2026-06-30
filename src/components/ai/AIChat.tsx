"use client";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import ChatMessage
from "./ChatMessage";

import ChatInput
from "./ChatInput";

interface Message {

  role:
    | "user"
    | "assistant";

  content: string;
}

export default function AIChat() {

  const [
    messages,
    setMessages,
  ] = useState<Message[]>([
    {
      role: "assistant",

      content:
        "Hello 👋 I am TRIPNEST AI. Ask me about travel, hotels, weather, translation or trip planning.",
    },
  ]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement>(
      null
    );

  /* AUTO SCROLL */

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }, [messages]);

  async function handleSend() {

    if (!input.trim()) {
      return;
    }

    const userMessage = {
      role: "user" as const,

      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    try {

      setLoading(true);

      const res =
        await fetch(
          "/api/ai",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message:
                userMessage.content,
            }),
          }
        );

      const data =
        await res.json();

      const aiMessage = {
        role:
          "assistant" as const,

        content:
          data.response,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,

        {
          role:
            "assistant",

          content:
            "Something went wrong.",
        },
      ]);

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] overflow-hidden shadow-2xl">

      {/* HEADER */}
      <div className="border-b border-white/10 px-8 py-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black text-white">

            AI Travel Assistant

          </h2>

          <p className="text-blue-200">

            Multilingual Smart Tourism Guide

          </p>

        </div>

        <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse" />

      </div>

      {/* MESSAGES */}
      <div className="h-[600px] overflow-y-auto px-6 py-8 space-y-6">

        {messages.map(
          (
            message,
            index
          ) => (

            <ChatMessage
              key={index}
              role={
                message.role
              }
              content={
                message.content
              }
            />

          )
        )}

        {loading && (

          <ChatMessage
            role="assistant"
            content="Typing..."
          />

        )}

        <div ref={messagesEndRef} />

      </div>

      {/* INPUT */}
      <div className="border-t border-white/10 p-6">

        <ChatInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
          loading={loading}
        />

      </div>

    </div>
  );
}
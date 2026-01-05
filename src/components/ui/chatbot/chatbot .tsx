import { useState, useRef, useEffect } from "react";
import { getBotReply, sendChatContact } from "./chatlogic";

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi 👋 I'm the Elicius Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  /* ---------------- CONTACT FLOW STATE ---------------- */
  const [contactStep, setContactStep] = useState<
    "none" | "name" | "email" | "phone" | "company" | "message"
  >("none");

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  /* ---------------- AUTO SCROLL ---------------- */
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  const container = messagesContainerRef.current;
  if (!container) return;

  container.scrollTop = container.scrollHeight;
}, [messages, isTyping]);

  /* ---------------- SEND MESSAGE ---------------- */
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setIsTyping(true);

    /* ---------------- CONTACT FLOW ---------------- */
    if (contactStep !== "none") {
      let nextBotMessage = "";
      const updatedData = { ...contactData };

      switch (contactStep) {
        case "name":
          updatedData.name = userText;
          nextBotMessage = "What’s your email address?";
          setContactStep("email");
          break;

        case "email":
          updatedData.email = userText;
          nextBotMessage = "Phone number? (optional)";
          setContactStep("phone");
          break;

        case "phone":
          updatedData.phone = userText;
          nextBotMessage = "Company name? (optional)";
          setContactStep("company");
          break;

        case "company":
          updatedData.company = userText;
          nextBotMessage = "Please type your message.";
          setContactStep("message");
          break;

        case "message":
          updatedData.message = userText;

          const reply = await sendChatContact({
            ...updatedData,
            interest: "Chatbot Inquiry",
          });

          setIsTyping(false);
          setMessages((prev) => [...prev, { from: "bot", text: reply }]);

          setContactData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          setContactStep("none");
          return;
      }

      setContactData(updatedData);
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: nextBotMessage }]);
      return;
    }

    /* -------- USER CONFIRMS CONTACT -------- */
    const confirmWords = ["send", "send now", "yes", "ok", "contact"];
    if (confirmWords.some((w) => userText.toLowerCase().includes(w))) {
      setContactStep("name");
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Great 👍 What’s your name?" },
      ]);
      return;
    }

    /* ---------------- NORMAL CHAT ---------------- */
    const reply = await getBotReply(userText);
    setIsTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text: reply }]);

    if (reply.toLowerCase().includes("help send a message")) {
      setContactStep("name");
    }
  };

  /* ---------------- TYPING INDICATOR ---------------- */
  const TypingIndicator = () => (
    <div className="bg-emerald-50 text-emerald-900 px-3 py-2 rounded-xl w-fit">
      Typing<span className="animate-pulse">...</span>
    </div>
  );

   return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
                   bg-emerald-600 text-white shadow-xl
                   hover:bg-emerald-700 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
      <div className="fixed bottom-24 right-6 z-50 w-80 h-[480px]
     bg-white rounded-2xl shadow-2xl
     border border-emerald-200
     flex flex-col overflow-hidden"
     >

          {/* Header */}
          <div className="bg-emerald-600 text-white px-4 py-3 font-semibold">
            Elicius Assistant
            <p className="text-xs text-emerald-100">
              Clean-tech intelligence
            </p>
          </div>

          {/* Messages */}
    <div
  ref={messagesContainerRef}
  className="flex-1 p-3 overflow-y-auto space-y-3 text-sm"
>
  {messages.map((m, i) => (
    <div
      key={i}
      className={`max-w-[85%] px-3 py-2 rounded-xl leading-relaxed ${
        m.from === "user"
          ? "ml-auto bg-emerald-100 text-emerald-900"
          : "bg-emerald-50 text-emerald-900"
      }`}
    >
      {m.text}
    </div>
  ))}

  {isTyping && <TypingIndicator />}
</div>


       
          <div className="border-t border-emerald-200 p-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about air quality, devices..."
              className="flex-1 px-3 py-2 text-sm rounded-lg
                         border border-emerald-300
                         focus:outline-none focus:ring-2
                         focus:ring-emerald-400"
            />

            <button
              onClick={sendMessage}
              className="px-4 py-2 rounded-lg
                         bg-emerald-600 text-white
                         hover:bg-emerald-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export async function getBotReply(question: string): Promise<string> {
  const res = await fetch("http://localhost:8000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: question }),
  });

  const data = await res.json();
  return data.reply;
}
export async function sendChatContact(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  interest?: string;
  message: string;
}): Promise<string> {
  const res = await fetch("http://localhost:8000/api/chat/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  return json.reply;
}

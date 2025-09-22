import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Nigel's AI assistant. Ask me about his projects, skills, or experience!"
    }
  ]);

  const quickResponses = [
    "What projects has Nigel worked on?",
    "What are his technical skills?",
    "How can I contact him?",
    "Tell me about his background"
  ];

  const handleQuickResponse = (response: string) => {
    const botResponses: { [key: string]: string } = {
      "What projects has Nigel worked on?": "Nigel has worked on ML projects including Predictive Analytics Dashboard (94% accuracy), NLP Sentiment Analysis Tool, and Interactive ML Demo Platform. Check out his Ticket Pilot project live at ticket-pilot-nu.vercel.app!",
      "What are his technical skills?": "Nigel specializes in Python, JavaScript, PyTorch, TensorFlow, scikit-learn, and has experience with Docker, Supabase, and FastAPI. He combines technical expertise with creative insights from music and art.",
      "How can I contact him?": "You can reach Nigel at via email, WhatsApp and LinkedIn.",
      "Tell me about his background": "Nigel is an ML Engineer and Software Developer passionate about building intelligent systems. He's currently a student at Uncommon.org and blends technical skills with creative insights from his background in music and art."
    };

    setMessages(prev => [
      ...prev,
      { type: "user", text: response },
      { type: "bot", text: botResponses[response] || "Thanks for your question! For detailed information, please contact Nigel directly." }
    ]);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [
      ...prev,
      { type: "user", text: message },
      { type: "bot", text: "Thanks for your message! For detailed responses, please contact Nigel directly via email, WhatsApp, or LinkedIn." }
    ]);
    setMessage("");
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary shadow-glow hover:opacity-90"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 glass-card flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-card-border">
            <h3 className="font-semibold text-foreground">Chat with Nigel's AI</h3>
            <p className="text-xs text-muted-foreground">Quick responses available</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          <div className="p-3 border-t border-card-border">
            <div className="grid grid-cols-1 gap-1 mb-3">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-xs h-auto p-1 justify-start"
                  onClick={() => handleQuickResponse(response)}
                >
                  {response}
                </Button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Ask anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="text-xs"
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
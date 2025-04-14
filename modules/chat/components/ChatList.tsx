// ChatList.tsx
import { ChatListProps } from "@/common/types/chat";
import { useRef, useEffect } from "react";

const ChatList = ({ messages, isWidget = false }: ChatListProps) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div 
      ref={messagesContainerRef} 
      className={`flex flex-col gap-4 overflow-y-auto overflow-x-hidden scroll-smooth ${
        isWidget ? "max-h-70 p-3" : "h-[calc(100vh-352px)] px-4 py-2"
      }`}
    >
      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-700 dark:text-gray-400 p-8 rounded-lg bg-gray-100 dark:bg-gray-800 max-w-full">
            <h3 className="text-xl mb-2">👋 Welcome to my private chatbot AI!</h3>
            <p>Ask me anything or start a conversation</p>
          </div>
        </div>
      )}

      {messages.map((msg) => (
        <div key={msg.id} className="flex flex-col w-full">
          {msg.name === "User" ? (
            <>
              <div className="flex items-center justify-end mb-1 gap-2">
                <span className="text-xs text-gray-400">
                  {new Date(msg.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <div className="flex items-center">
                  <div className="text-white text-sm px-3 py-1 rounded-full">
                    {msg.name}
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    😊
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-neutral-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%]">
                  <p className="text-sm whitespace-pre-line break-words">{msg.message}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center mb-1 gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  🤖
                </div>
                <div className="text-gray-300 text-sm">{msg.name}</div>
                <span className="text-xs text-gray-400 ml-1">
                  {new Date(msg.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                  {msg.is_reply && (
                    <div className="text-xs mb-2 opacity-75 border-l-2 pl-2 italic bg-opacity-20 bg-gray-200 py-1 rounded">
                      Replying to previous message
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line break-words">{msg.message}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatList;
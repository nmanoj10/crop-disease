// src/components/chat/ChatInput.tsx

import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { Button } from '../ui/Button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }
    
    setIsRecording(!isRecording);
    // In a real app, implement Web Speech API here
  };

  return (
    <div className="relative p-4 bg-bg-primary/80 backdrop-blur-md border-t border-border-color">
      {isRecording && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-accent-red text-white rounded-full text-xs font-bold animate-pulse flex items-center gap-2 shadow-lg">
          <div className="h-2 w-2 bg-white rounded-full animate-ping" />
          Listening...
        </div>
      )}

      <div className="max-w-4xl mx-auto flex items-end gap-3">
        <button
          onClick={toggleRecording}
          className={`p-3 rounded-xl transition-all shrink-0 ${
            isRecording 
              ? 'bg-accent-red text-white shadow-glow-lg scale-110' 
              : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-primary'
          }`}
        >
          {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        </button>

        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about farming..."
            className="w-full bg-bg-card border border-border-color rounded-2xl px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-green transition-all resize-none"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          className="p-3 rounded-xl bg-accent-green text-bg-primary hover:shadow-glow transition-all disabled:opacity-50 disabled:scale-100 active:scale-90 shrink-0"
        >
          <Send className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

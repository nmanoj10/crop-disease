import { useState } from 'react';
import { Bot, Check, Copy } from 'lucide-react';
import { clsx } from 'clsx';
import { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.role === 'bot';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={clsx('flex w-full gap-4 mb-6', isBot ? 'justify-start' : 'justify-end')}>
      {isBot && (
        <div className="h-10 w-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0 border border-accent-green/20">
          <Bot className="h-6 w-6" />
        </div>
      )}

      <div
        className={clsx(
          'relative max-w-[80%] p-4 rounded-2xl group transition-all',
          isBot
            ? 'bg-bg-card border border-border-color text-text-secondary rounded-tl-none'
            : 'bg-gradient-to-br from-accent-green to-accent-emerald text-bg-primary font-medium rounded-tr-none shadow-glow'
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

        <div className={clsx('mt-2 text-[10px] opacity-50', isBot ? 'text-text-muted' : 'text-bg-primary')}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>

        {isBot && (
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 text-text-muted opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 hover:text-text-primary"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-accent-green" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>

      {!isBot && (
        <div className="h-10 w-10 rounded-xl bg-accent-green text-bg-primary flex items-center justify-center shrink-0 font-bold">
          U
        </div>
      )}
    </div>
  );
};

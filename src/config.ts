import { Message } from 'react-chatbot-kit';

interface BotConfig {
  initialMessages: Message[];
  botName: string;
}

const config: BotConfig = {
  initialMessages: [
    { id: 1, message: "Hi! I'm Vinod's Portfolio Bot. Ask me about Vinod!", type: "bot" as const },
  ],
  botName: "VinodBot",
};

export default config;
declare module 'react-chatbot-kit' {
    // Message interface manually defined
    export interface Message {
      id: number | string;
      message: string;
      type: 'bot' | 'user';
    }
  
    interface ChatbotConfig {
      initialMessages: Message[];
      botName: string;
    }
  
    interface ChatbotProps {
      config: ChatbotConfig;
      messageParser: new (actionProvider: any) => any;
      actionProvider: new (
        createChatBotMessage: (message: string) => Message,
        setState: (fn: (prevState: any) => any) => void
      ) => any;
    }
  
    const Chatbot: React.FC<ChatbotProps>;
    export default Chatbot;
  }
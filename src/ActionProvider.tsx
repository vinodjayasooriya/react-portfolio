import { Message } from 'react-chatbot-kit';
import { motion } from 'framer-motion';

interface ChatbotState {
  messages: Message[];
}

type SetStateFunc = (prevState: ChatbotState) => ChatbotState;

class ActionProvider {
  private createChatBotMessage: (content: string) => Message;
  private setState: (fn: SetStateFunc) => void;

  constructor(createChatBotMessage: (content: string) => Message, setState: (fn: SetStateFunc) => void) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
  }

  handleIntro(): void {
    const message = this.createChatBotMessage(
      "I'm Vinod Jayasooriya, a Full Stack Software Engineer from Weligama, Sri Lanka. I have 1+ years of experience in web development."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleSkills(): void {
    const message = this.createChatBotMessage(
      "My skills include JavaScript, TypeScript, Java, Python, React.js, Node.js, Spring Boot, MySQL, Agile Scrum, and more!"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleProjects(): void {
    const message = this.createChatBotMessage(
      "Some of my projects: \n1. Detecting Freshness of Fish Fillet (Machine Learning, TensorFlow, Flutter)\n2. Travelheap Hotels Directory (Laravel, MySQL)\n3. Backend of Loan Requesting Mobile App (Spring Boot, MySQL)\n4. Hotel Management System (Spring Boot, MySQL)"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleExperience(): void {
    const message = this.createChatBotMessage(
      "I worked as a Software Engineer Intern at Gowoma Solutions (Mar 2023 - Dec 2023) using React.js, Spring Boot, and MySQL. Also, I was an IT Assistant at Power Ton and Vogue Tex."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleDefault(): void {
    const message = this.createChatBotMessage(
      "Sorry, I didn't get that. Ask me about Vinod's skills, projects, or experience!"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleEducation(): void {
    const message = this.createChatBotMessage(
      "My education: " +
      "\n- Bachelor of Information and Communication Technology (Honours), Faculty of Technology, University of Ruhuna, Sri Lanka" +
      "\n- Comprehensive Master Java Developer – Professional, Institute of Software Engineering (IJSE), Panadura"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // Animation variants for chatbot messages
  private messageVariants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden with slight downward shift
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Fade in with smooth transition
  };

  // Method to create animated message
  createAnimatedMessage(content: string) {
    const message = this.createChatBotMessage(content);
    return (
      <motion.div
        key={message.id}
        initial="hidden"
        animate="visible"
        variants={this.messageVariants}
      >
        {message.message}
      </motion.div>
    );
  }
}

export { ActionProvider };
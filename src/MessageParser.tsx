import { ActionProvider } from './ActionProvider';

class MessageParser {
  private actionProvider: ActionProvider;

  constructor(actionProvider: ActionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message: string): void {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("who is vinod")) {
      this.actionProvider.handleIntro();
    } else if (lowerCaseMessage.includes("skills")) {
      this.actionProvider.handleSkills();
    } else if (lowerCaseMessage.includes("projects")) {
      this.actionProvider.handleProjects();
    } else if (lowerCaseMessage.includes("experience")) {
      this.actionProvider.handleExperience();
    } else if (lowerCaseMessage.includes("education")) {
      this.actionProvider.handleEducation();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
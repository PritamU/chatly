interface UserInterface {
  id: string;
  name: string;
  isOnline: boolean;
  unreadMessages: string[];
}

interface MessageInterface {
  id: string;
  message: string;
  sender: string;
  receiver: string;
  initiatorUserId: string;
  createdAt: Date;
}

export type { MessageInterface, UserInterface };

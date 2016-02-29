import BaseModel from './BaseModel';

class ChatModel extends BaseModel {
  defaults() {
    return {
      title: "New Message",
      completed: false
    };
  }

  constructor() {
    super('chat');
  }


}

export default ChatModel;

import React from 'react';


class ChatForm extends React.Component {
  componentDidMount() {
    this.chats = this.props.model;
  }

  createChat(event) {
    event.preventDefault();
    let newMessage = this.refs.newChat.value;
    this.chats.addResource({
      message: newMessage,
      completed: false
    });
    this.refs.newMessage.value = "";
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createChat.bind(this)}>
          <input type="text" ref="newMessage"/>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default ChatForm;

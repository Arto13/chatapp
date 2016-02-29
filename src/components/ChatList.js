import React from 'react';


class ChatForm extends React.Component {
  componentDidMount() {
    this.chats = this.props.model;
  }

  createMessage(event) {
    event.preventDefault();
    console.log("Create Chat Called!");
    let newMessage = this.refs.newMessage.value;
    this.chats.addResource({
      title: newMessage,
      completed: false
    });
    this.refs.newMessage.value = "";
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createMessage.bind(this)}>
          <input type="text" ref="newMessage"/>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default ChatForm;

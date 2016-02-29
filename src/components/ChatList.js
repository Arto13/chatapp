import React from 'react';

class ChatList extends React.Component {
  constructor() {
    super();

    this.state = {
      chats: []
    };
  }

  componentDidMount() {
    this.chats = this.props.model;
    this.chats.subscribe(this.updateList.bind(this))
  }

  updateList() {
    this.setState({
      chats: this.chats.resources
    });
  }

  render() {
    console.log(this.state.chats);
    return(
      <div className="well">
        <ul>
          {this.state.chats.map((chat) => {
            return (<li key={chat._id}>{chat.message}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default ChatList;

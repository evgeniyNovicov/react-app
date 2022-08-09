import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../redux/state';
import Messages from '../Messages';
import classes from './../Dialogs.module.css';

const Message = (props) => {
  let messagesElements = props.messages
  .map(m => <Messages message={m.message} />)
  let newMessagesElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () =>{
    let text = newMessagesElement.current.value;
    props.dispatch(onMessageChangeActionCreator(text))
  }

return  <div className={classes.messages}>
   {messagesElements}
    <div>
        <textarea onChange={onMessageChange} ref={newMessagesElement}
        value={props.newMessageText}/>
        <button onClick={addMessage}>Add</button>
    </div>
</div>
}

export default Message;
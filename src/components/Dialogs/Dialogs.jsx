import React from 'react';

import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);
    return (
        <div className={classes.dialogs}>
            <DialogItem dialogsElements={dialogsElements}/>
            <Message
                dialogs={props.messagesPage.dialogs}
                messages={props.messagesPage.messages}
                newMessageText={props.messagesPage.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
}



export default Dialogs;
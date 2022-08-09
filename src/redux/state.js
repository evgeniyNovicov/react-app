
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const store = {
    _state : {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeNumber: 15 },
                { id: 2, message: 'It\'s my first post', likeNumber: 24 }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Ruslan' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Evgen' },
                { id: 4, name: 'Natasha' },
                { id: 5, name: 'Ksusha' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I am fine' },
                { id: 4, message: 'Thanks' },
                { id: 5, message: 'Good bye' }
            ],
            newMessageText: 'It cool'
        },
        sidebar: {
        }
    },
    getState() {
        return this._state
    },
    _callsubscriber() {},
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeNumber: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText=''
        this._callsubscriber (this._state)
    },
    _updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callsubscriber(this._state)
    },
    _addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.newMessageText,
            likeNumber: 0
        };
        this._state.messagesPage.messages.push (newMessage);
        this._state.messagesPage.newMessageText=''
        this._callsubscriber (this._state)
    },
    _updateNewMessageText (newMessage) {
        this._state.messagesPage.newMessageText = newMessage
        this._callsubscriber (this._state)
    },
    dispatch(action) {
        switch(action.type){
            case ADD_POST:
                this._addPost()
                break
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newText)
                break
            case ADD_MESSAGE:
                this._addMessage()
                break
            case UPDATE_NEW_MESSAGE_TEXT:
                this._updateNewMessageText(action.newText)
                break
                default:
                console.log('Неправильный action type')
                break
        }
    },
    subscribe(observer) {
        this._callsubscriber = observer
    }
}



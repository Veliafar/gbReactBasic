import './App.css';
import {useEffect, useState, useRef} from "react";
import {Button, FormControl, Input, InputLabel, TextField} from "@mui/material";


function App() {
  const [messageList, setMessageList] = useState([
    {
      author: 'me',
      text: 'how'
    },
    {
      author: 'me',
      text: 'are'
    },
    {
      author: 'me',
      text: 'you?'
    }
  ]);
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: 'me'
  });

  const ROBOT_MESSAGE = 'Привет. Я получил сообщение';

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(prevState => [...prevState, {text: ROBOT_MESSAGE, author: 'robot'}])
      }, 1500)
    }
  }, [messageList])


  return (
    <div className="wrapper">
      <ChatList></ChatList>

      <div className="board">
        <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
        <div className="messages-list">
          {
            messageList.map((elem, index) => <Message text={elem.text} author={elem.author} key={index}></Message>)
          }
        </div>
      </div>
    </div>
  )
}

export default App;

const ChatList = () => {

  const chatList = [
    {
      id: 1,
      name: 'Some Name'
    },
    {
      id: 2,
      name: 'Other Name'
    },
    {
      id: 3,
      name: 'Random Name'
    },
  ];

  return (
    <div className="chat-list">
      {
        chatList.map((elem, index) => <div className="chat-list__item" key={index}>
          {elem.name}
        </div>)
      }
    </div>
  )
}


const Message = ({author, text}) => {
  return (
    <div className="message">
      <p className="message__author">
        <span>
          {author}
        </span>
      </p>
      <p className="message__text">
        <span>
          {text}
        </span>
      </p>
    </div>
  )
}


const Form = ({data, setData, setMessage}) => {

  const {text, author} = data;

  const submitForm = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setMessage(prevState => [...prevState, {text, author}])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }

  // const textInput = useRef(null);
  // useEffect(() => {
  //   console.log('sdf!!')
  //   textInput?.current?.focus();
  // },[text]);

  return (
    <form className="form" onSubmit={submitForm}>

      <FormControl>
        <TextField
          autoFocus
          // ref={textInput}
          placeholder="text" id="time"
          type="text" value={text} onChange={
          (event) => setData(pervState => ({...pervState, text: event.target.value}))
        }/>
      </FormControl>

      <Button type="submit">Отправить</Button>
    </form>
  )
}

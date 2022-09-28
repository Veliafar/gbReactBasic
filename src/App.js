import './App.css';
import {useEffect, useRef, useState} from "react";
import {Message} from "./message/message";
import {SendForm} from "./send-form/send-form";
import {ChatList} from "./chat-list/chat-list";


function App() {
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
      <ChatList chatList={chatList}></ChatList>

      <div className="board">

        <div className="messages-list">
          {
            messageList.map((elem, index) => <Message text={elem.text} author={elem.author} key={index}></Message>)
          }
        </div>

        <SendForm data={messageBody} setData={setMessageBody} setMessage={setMessageList}></SendForm>

      </div>
    </div>
  )
}

export default App;







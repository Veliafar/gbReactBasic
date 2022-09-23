import './App.css';
import {useEffect, useState, useRef} from "react";


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
    author: ''
  });

  const firstUpdate = useRef(true);


  const ROBOT_MESSAGE = 'Привет. Я получил сообщение';

  useEffect(()=> {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList( prevState => [...prevState, {text: ROBOT_MESSAGE, author: 'robot'}])
      }, 1500)
    }
  }, [messageList])


  return (
    <div className="board">

      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div  className="messages-list">
        {
          messageList.map((elem, index)=> <Message text={elem.text} author={elem.author} key={index}></Message>)
        }
      </div>

    </div>
  )
}

export default App;

const Message = ({author, text}) => {

  return(
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
      setMessage(prevState=> [...prevState, {text,author}])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }

  return(
    <form className="form" onSubmit={submitForm}>
      <input placeholder='Имя' value={text} onChange={
        (event) => setData( pervState => ({...pervState, text: event.target.value}) )
      }/>

      <input placeholder='Текст' value={author} onChange={
        (event) => setData( pervState => ({...pervState, author: event.target.value}) )
      }/>

      <button type="submit">Отправить</button>
    </form>
  )

}

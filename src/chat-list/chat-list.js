export const ChatList = ({chatList}) => {
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

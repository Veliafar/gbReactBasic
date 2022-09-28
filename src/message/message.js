export const Message = ({author, text}) => {
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

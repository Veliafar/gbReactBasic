import {Button, FormControl, TextField} from "@mui/material";

export const SendForm = ({data, setData, setMessage}) => {

  const {text, author} = data;

  const submitForm = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setMessage(prevState => [...prevState, {text, author}])
    }
    setData(
      {
        text: '',
        author: 'me'
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

      <FormControl sx={{ width: '100%' }}>
        <TextField
          autoFocus
          sx={{ width: '100%' }}
          // ref={textInput}
          placeholder="text" id="time"
          type="text" value={text} onChange={
          (event) => setData(pervState => ({...pervState, text: event.target.value}))
        }/>
      </FormControl>

      <Button sx={{ marginLeft: '24px' }} type="submit">Отправить</Button>
    </form>
  )
}

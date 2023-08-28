import { useState } from 'react';
import './App.css'

function App() {
  const [isPdf, setIsPdf] = useState(false);
  const [value, setValue] = useState('123456');

  const handleChangeValue:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }

  const handleTogglePDF:React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    setIsPdf(!isPdf);
  }

  return (<div>
    <a href="#" onClick={handleTogglePDF}>Toggle PDF/IFRAME</a>
    <div className='main'>
      <div className='item'>
        {!isPdf && <iframe src="https://example.com" className="thing"></iframe>}
        {isPdf && <embed src="sample.pdf" className='thing' />}
      </div>
      <div className='item'>
        <input type="text" value={value} onChange={handleChangeValue} className='input-text' />
      </div>
    </div></div>
  )
}

export default App

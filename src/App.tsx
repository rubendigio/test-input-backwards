import { useState } from 'react';
import './App.css'

function App() {
  const [isPdf, setIsPdf] = useState(false);
  const [value, setValue] = useState('123456');
  const [overflowY, setOverflowY] = useState<'auto'|'hidden'>('auto');

  const handleChangeValue:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }

  const handleTogglePDF:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setIsPdf(!isPdf);
  }

  const handleToggleOverflowY:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOverflowY(overflowY === 'auto' ? 'hidden' : 'auto');
  }

  return (
    <div>
      <div className='header'>
        <button onClick={handleTogglePDF}>Toggle PDF/IFRAME</button>
        <button onClick={handleToggleOverflowY}>Toggle Scrollbar</button>
      </div>
      <div className='main' style={{overflowY}}>
        <div className='item'>
          {!isPdf && <iframe src="https://example.com" className="thing"></iframe>}
          {isPdf && <embed src="sample.pdf" className='thing' />}
        </div>
        <div className='item'>
          <input type="text" value={value} onChange={handleChangeValue} className='input-text' />
        </div>
      </div>
    </div>
  )
}

export default App

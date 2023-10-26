import { useState } from 'react'
import './App.css'
import { useForm } from './useForm'
import { generatePassword } from './utils'
import { FaClipboard } from 'react-icons/fa'
import toast from 'react-hot-toast'

function App() {
  const [values, setValues] = useForm({
    length: 8,
    uppercase: true,
    lowercase: true,
    num: false,
    symbol: false
  })

  const [result, setResult] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let password = generatePassword(values)
    if (password) {
      setResult(generatePassword(values))
    } else {
      toast.error('Select at least one option')
    }
  }

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result)
      return toast.success('Copied to clipboard')
    }
    return toast.error('No password to copy')
  }

  return (
    <main>
      <header>
        <input className='result' type='text' value={result} readOnly />
        <div className='clipboard' onClick={handleClipboard}>
          <FaClipboard />
        </div>
      </header>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor='length'>Length</label>
          <input
            type='number'
            id='length'
            name='length'
            checked={values.length}
            onChange={setValues} min={8} max={20} />
        </div>
        <div>
          <label htmlFor='uppercase'>Uppercase</label>
          <input
            type='checkbox'
            id='uppercase'
            name='uppercase'
            checked={values.uppercase}
            onChange={setValues} />
        </div>
        <div>
          <label htmlFor='minus'>Lowercase</label>
          <input
            type='checkbox'
            id='minus'
            name='lowercase'
            checked={values.lowercase}
            onChange={setValues} />
        </div>
        <div>
          <label htmlFor='num'>Numbers</label>
          <input
            type='checkbox'
            id='num'
            name='num'
            checked={values.num}
            onChange={setValues} />
        </div>
        <div>
          <label htmlFor='symbol'>Symbols</label>
          <input
            type='checkbox'
            id='symbol'
            name='symbol'
            checked={values.symbol}
            onChange={setValues} />
        </div>
        <button type='submit'>Generate password</button>
      </form>
    </main >
  )
}

export default App

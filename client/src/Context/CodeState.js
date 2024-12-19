import CodeContext from '../Context/CodeConext'
import { useState } from 'react'
import DefaultCodeProvider from './DefaultCodeProvider'
const CodeState = (props) => {
  const [isRunning, setIsRunning] = useState(false)
  const [lang, setLang] = useState('cpp')
  const [code, setCode] = useState(DefaultCodeProvider.cpp)
  const [defaultCode, setDefaultCode] = useState(DefaultCodeProvider.cpp)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [version, setVersion] = useState('')

  const runCode = async () => {
    const data = {
      lang,
      code,
      input,
      version
    }
    setIsRunning(true)
    const response = await fetch('http://localhost:5000/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
     console.log("code==:  ",code)
    const out = await response.json()
    setOutput(out)
    setIsRunning(false)
    console.log(out)
  }
  return (
    <CodeContext.Provider
      value={{
        lang,
        version,
        setVersion,  
        setLang,
        isRunning,
        runCode,
        code,
        setCode,
        defaultCode,
        setDefaultCode,
        input,
        setInput,
        output,
        setOutput,
      }}
    >
      {props.children}
    </CodeContext.Provider>
  )
}

export default CodeState

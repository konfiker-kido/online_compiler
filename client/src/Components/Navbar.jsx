import React, { useContext } from 'react'
import CodeContext from '../Context/CodeConext'
import defautCodeProvider from '../Context/DefaultCodeProvider'
import runsvg from '../imges/play_arrow_white_24dp.svg'

const Navbar = () => {
  const { lang, setLang, setDefaultCode, setCode, runCode, isRunning } =
    useContext(CodeContext)
  const handleChange = (lang) => {
    setLang(lang)
    setDefaultCode(defautCodeProvider[`${lang}`])
    setCode(defautCodeProvider[`${lang}`])
  }

  return (
    <nav>
      <div className='navLeft'>
        <h1 className='logo'>Codify</h1>
        <button disabled={isRunning} className='button-19' onClick={runCode}>
          <img className='runimg' src={runsvg} alt='runImg' />
          Run
        </button>
      </div>
      {/* <div className='navRight'> */}
      {/* <button className='btn btnShare'>Share</button> */}
      {/* </div> */}
    </nav>
  )
}

export default Navbar

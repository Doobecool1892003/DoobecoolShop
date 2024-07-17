import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
  const [ValueInput, setValueInput] = useState('')
  const {placeholder= 'Nhập text', ...rests} = props
  return (
    <>
      <WrapperInputStyle placeholder={placeholder}  value={ValueInput} {...rests}/> 
    </>
  )
}

export default InputForm
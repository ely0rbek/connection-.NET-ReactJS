import React, { useState } from 'react'
import Input from './input'
import Second from './second'

const First = () => {
    const [value,setValue]=useState(null)

  return (
    <>
        <Input state={value} id={'1'} type="text" setState={setValue} label={'Text...'}/>
        <Second value={value}/>
    </>
  )
}

export default First
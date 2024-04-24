import React from 'react'

const Input = ({ type='text', label, state, setState,id}) => {
    return (
        <>
            <input type={type}
            id={id}
            className="form-control mt-2 p-3" 
            placeholder={label} 
            required="" 
            value={state} 
            onChange={e => setState(e.target.value)}/>
        </>
    )
}

export default Input
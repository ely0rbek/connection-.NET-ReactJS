import React from 'react'

const Input = ({ label, state, setState,id}) => {
    return (
        <>
            <input type="text" 
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
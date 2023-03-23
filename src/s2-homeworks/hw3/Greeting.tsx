import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {KeyboardEvent} from "react";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: ()=> void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyDownInput:(e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyDownInput} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name}
                   onKeyDown={onKeyDownInput}
                   onChange={setNameCallback}
                   className={inputClass}
            />
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.count}>{totalUsers}</span>
            <div className={s.errorText} ><span>{error}</span></div>

        </div>
    )
}

export default Greeting

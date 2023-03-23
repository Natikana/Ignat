import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {KeyboardEvent} from "react";

export type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void/// may be correct
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') /// need to fix any
    const [error, setError] = useState<string | null>(null) /// need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement> ) => { // need to fix any
        setName(event.currentTarget.value)
        //setName('') // need to fix
    }
    const addUser = () => {
       if (name) {
            addUserCallback(name)
            alert(`Hello ${name} !`) /// need to fix
        } else {
         setError('Field is required');
       }
        setName('')
    }

    const onKeyDownInput = (e: KeyboardEvent<HTMLInputElement> ) => {
        if (e.key === 'Enter') addUser()
    }

    const totalUsers = users.length // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownInput={onKeyDownInput}
        />
    )
}

export default GreetingContainer

import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import h2 from './Affairs.module.css'

export type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void/// may be it will be correct
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair ={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={h2.container}>

            { mappedAffairs }

            <button className={h2.button} onClick={setAll}>All</button>
            <button className={h2.button} onClick={setHigh}>High</button>
            <button className={h2.button} onClick={setMiddle}>Middle</button>
            <button className={h2.button} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

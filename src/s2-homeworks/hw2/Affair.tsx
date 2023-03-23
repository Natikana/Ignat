import React from 'react'
import {AffairType} from "./HW2";
import h2 from "./Affairs.module.css"

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType /// need to fix any
    deleteAffairCallback: (_id: number) => void /// may be it will be correct
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={h2.contant}>
            <div className={h2.name}>{props.affair.name}</div>
            <div className={h2.priority}>{props.affair.priority}</div>
            <button className={h2.delete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

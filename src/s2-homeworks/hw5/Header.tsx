import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from "./pages/Header.module.css"
import {PATH} from "./Pages";

function Header() {
    let[click, setClick] = useState<boolean>(false)

    const onClickHandler = () => {
        setClick(!click)

    }
    return (
        <div className={s.wrapper}>
            <div className={ `${s.panel} ${click ? s.panelActive : s.panel}`}>
                <nav className={s.content}>
                    <NavLink to={PATH.PRE_JUNIOR} className={s.preJunior}>Pre-junior</NavLink>
                    <NavLink to={PATH.JUNIOR} className={s.junior}>Junior</NavLink>
                    <NavLink to={PATH.SUPER_JUNIOR} className={s.superJunior}>Super junior</NavLink>
                </nav>
                <button className={s.btn} onClick={onClickHandler}>click</button>
            </div>
        </div>
    )
}

export default Header

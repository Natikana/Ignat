import React from 'react'
import s from './Error404.module.css'


function Error404() {
    return (
        <div className={s.content}>
            <div className={s.number}>404</div>
            <div className={s.text}>Page not found!</div>
            <div className={s.page}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404

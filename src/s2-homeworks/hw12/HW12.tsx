import React, {useEffect} from 'react'

import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'


import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

export const HW12 = () => {
    // взять ид темы из редакса
    // const themeId = 1
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
    const dispatch = useDispatch()
    //
    //
    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }
    //
    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''

    }, [themeId])

    return (
        <div id={'hw12'} style={{height:'100px', marginLeft:'30px'}}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                <h3>Homeworks №12</h3>
            </div>

            <div className={s2.hw} style={{margin:'20px 0 0 0'}}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    onChangeOption={change}
                    value={themeId}
                    options={themes}
                />
            </div>
        </div>
    )
}



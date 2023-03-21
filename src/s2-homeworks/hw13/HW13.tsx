import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw4/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const send = (x?: boolean | null) => () => {

        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                setInfo('')
            })
            .catch((e) => {
                if (e.message === 'Request failed with status code 500') {
                    setImage(error500)
                    setText('ОШИБКА 500!' + ' ' + e.response.data.errorText + ' ' + e.response.data.info)
                }
                if (e.message === 'Request failed with status code 400') {
                    console.log(e)
                    setImage(error400)
                    setText('ОШИБКА 400' + ' ' + e.response.data.errorText + ' ' + e.response.data.info)
                }
                if (e.message === 'Network Error') {
                    setImage(errorUnknown)
                    setText('ERROR! NetworkError' + ' ' + e.name)
                }
                setInfo('')
                // дописать

            })
    }

    return (
        <div id={'hw13'} style={{ marginLeft:'30px'}}>
            <div className={s2.hwTitle} style={{color: 'black'}}><h3>Homework №13</h3></div>
            <div className={s2.hw} style={{height:'450px'}}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        // xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        // xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        // xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                       /* xType={'secondary'}*/
                        disabled={info === '...loading'}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer} style={{margin:'30px 0 0 0'}}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer} style={{margin:'30px 0 0 0'}}>
                        <div id={'hw13-code'} className={s.code} style={{fontWeight:'700'}} >
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text} style={{fontWeight:'700'}}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info} style={{fontWeight:'700'}}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13

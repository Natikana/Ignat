import React, {useState} from 'react'
import SuperButton from '../hw4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const [showTime, setShowTime] = useState<boolean>(false)


    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())

        }, 1000)
        setTimerId(id)
        setShowTime(true)
    }

    const onMouseEnter = () => {
        setShow(!show)
    }
    const onMouseLeave = () => {
       setShow(!show)
    }
    const getTimeWithoutZero = (value:number) => {
        return value < 10 ? '0' + value : value
    }
    const time = new Date()
    const stringTime = `${getTimeWithoutZero(time.getHours())} //new Date().toLocaleTimeString()
    : ${getTimeWithoutZero(time.getMinutes())}
    : ${getTimeWithoutZero(time.getSeconds())}`

    const stringDate = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`

    return (
        <div>
            {showTime && <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{color:'yellow',fontWeight:'500'}}
            >
                {stringTime}
            </div>}

            {show && (
                <div style={{color:'whitesmoke',fontWeight:'700'}}>
                    {stringDate}
                </div>
            )}

            <SuperButton style={{backgroundColor: 'blueviolet',
                color: 'white',
                border: 'solid 1px blueviolet',
                borderRadius: '3px',
                width: '40px',
                height: '25px',
                marginRight:'5px'
            }} onClick={start}>start</SuperButton>
            <SuperButton style={{backgroundColor: 'blueviolet',
                color: 'white',
                border: 'solid 1px blueviolet',
                borderRadius: '3px',
                width: '40px',
                height: '25px'}} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

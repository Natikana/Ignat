import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from 'react-router-dom'

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test2',
            {params: {find}}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

export const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                if (res) {
                    setTechs(res.data.techs)
                }
                setLoading(false)
            })
    }

    const onChangeText = (value: string) => {
        setFind(value)

        const params = Object.fromEntries(searchParams)
        const findQuery: { find: string } = {find: value}
        const {find, ...restQueries} = params
        // добавить/заменить значение в квери урла
        setSearchParams({...restQueries, ...findQuery})
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'} style={{height:'350px', marginLeft:'30px'}}>
            <div className={s2.hwTitle}><h3>Homework №14</h3>
            </div>
            <div className={s2.hw} style={{margin:'20px 0 0 0'}}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                    style={{border: '2px solid #5151db', width: '400px', height: '30px'}}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br/>}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

/*export default HW14
function diamond(n) {
    let str = '';
    let maxStarsInRow = n * 2 - 1;

    for (let i = 1; i <= n; i++) {
        let starsInRow = i * 2 - 1;
        let spacesInRow = 2 * (n - i);

        for (let j = 0; j < maxStarsInRow; j++) {
            if (j >= 0 && j < spacesInRow / 2) {
                str += ' ';
            } else if (j >= spacesInRow / 2 && j < spacesInRow / 2 + starsInRow) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }
    return str + str.split('').reverse().join('').substring(2 * n + 1, str.length);
}

console.log(diamond(5));*/
/*let str = ''
let n = 10
for (let i = 1; i <= n; i++) {
    let spaces = ''
    for (let j = 0; j <= n - i; j++) {
        spaces += ' '
    }
    let numbers = ''
    for (let j = 1; j <= i; j++) {
        numbers += j % 10
    }
    let numbersTwo = ''
    for (let j = i-1; j > 0; j--) {
        numbersTwo += j % 10
    }

    console.log(spaces + numbers + numbersTwo)
}
for (let i = n-1; i > 0; i--) {
    let spaces = ''
    for (let j = 0; j <= n - i; j++) {
        spaces += ' '
    }
    let numbers = ''
    for (let j = 1; j <= i; j++) {
        numbers += j % 10
    }
    let numbersTwo = ''
    for (let j = i-1; j > 0; j--) {
        numbersTwo += j % 10
    }

    console.log(spaces + numbers + numbersTwo)
}*/
/*let wall = 5
let dayPogress = 3
let nightRegress = 2
let position = 0
let day = 0

while (position < wall) {
    position += dayPogress
    day++
    if (position < wall) {
        position -= nightRegress
    }
}
console.log(`Snail got to the top of the wall for ${day} days`)*/

/*let arr = ['{', '(', ')', '}']
let arrNew = []

for (let i = 0; i < arr.length; i++) {
    if ('{' == arr[i] || '(' == arr[i] || '[' == arr[i]) {
        arrNew.push(arr[i])
    } else {
        if (arrNew.length == 0) {
            console.log('Array is 0')
        }
        let bracket = arrNew.pop()
        if (arr[i] == '}' && bracket != '{') {
            console.log('Not right!')
        }
        if (arr[i] == ')' && bracket != '(') {
            console.log('Not right')
        }
        if (arr[i] == ']' && bracket != '[') {
            console.log('Not right.')
        }
    }
}
console.log(arrNew)
if (arr.length == 0) {
    console.log('Good')
}*/

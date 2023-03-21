import React from 'react'
import iconArrow from '../../image/pagination.png'
import arrowUp from '../../image/6355036_arrow_up_icon.png'
import arrowDown from '../../image/172457_down_arrow_icon.png'


// добавить в проект иконки и импортировать
//const downIcon = '[\\/]'
//const upIcon = '[/\\]'
//const noneIcon = '[--]'
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = iconArrow


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    return sort === down ? up : sort === up ? '' : down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort

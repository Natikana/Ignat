import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import styles from './SuperSelect.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el: {id: number; value: string},index) => (
        <option key={el +'-'+ index} className={styles.options} value={el.id}>{el.value}</option>

    )) : [] ; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
        // <div>{JSON.stringify(options)}</div>
    )
}

export default SuperSelect

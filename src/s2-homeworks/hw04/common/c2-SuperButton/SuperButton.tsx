import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
        // + (disabled
        //         ? ...
        //         : xType === 'red'
        //             ? ...
        + (className ? ' ' + className : '') // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            style={{border: '2px solid #03a9f4',
                backgroundColor:"white",
                width:'100px', height:'22px', color:'#03a9f4'}}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton

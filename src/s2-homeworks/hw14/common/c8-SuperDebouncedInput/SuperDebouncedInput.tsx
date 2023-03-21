import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState} from 'react'
import SuperInputText from '../../../hw4/common/c1-SuperInputText/SuperInputText'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
} // илм экспортировать тип SuperInputTextPropsType
    & { // плюс специальный пропс SuperPagination
    onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
    {
        onChangeText,
        onDebouncedChange,
        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)

    const onChangeTextCallback = (value: string) => {

        onChangeText?.(value)

        if (onDebouncedChange) {
            // делает студент
            timerId && clearInterval(timerId)
            const id = +setTimeout(() => {
                onDebouncedChange(value)
                setTimerId(undefined)
            }, 1500)
            setTimerId(id)
            // остановить предыдущий таймер
            // запустить новый на 1500ms, в котором вызовется функция
        }
    }

    return (
        <SuperInputText onChangeText={onChangeTextCallback} {...restProps}/>
    )
}

export default SuperDebouncedInput
/*
'{ accept?: string | undefined; alt?: string | undefined; autoComplete?: string | undefined; ' +
'autoFocus?: boolean | undefined; capture?: boolean | "user" | "environment" | undefined; ... 285 more ...; ' +
'onChangeText: (value: string) => void; }' is not assignable to type '{ onChangeText?: ((value: string) => void) | undefined; ' +
'onEnter?: (() => void) | undefined; error?: string | undefined; spanClassName?: string | undefined; }'. Types of property 'error' are incompatible.*/

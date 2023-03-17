import React from 'react'
import {capitalize, Slider, SliderProps} from '@mui/material'

const CustomSliderStyles = {
    '& .MuiSlider-thumb': {
        color: "green"
    },
    '& .MuiSlider-track': {
        color: "green"
    },
    '& .MuiSlider-rail': {
        color: "grey"
    },
    '& .MuiSlider-active': {
        color: "lightGreen"
    },
};



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={ // стили для слайдера // пишет студент
                CustomSliderStyles}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

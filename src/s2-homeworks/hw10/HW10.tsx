import React from 'react'
import SuperButton from '../hw4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingT, loadingTrueAC, } from "./bll/loadingReducer";

function HW10() {

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch<Dispatch<LoadingT>>()

    const setLoading = () => {

        setTimeout(() => {
            dispatch(loadingAC())
        },2000)
        dispatch(loadingTrueAC())
    };

    return (
        <div style={{height:'80px',marginLeft:'30px'}}>
            <h3>Homeworks №10</h3>
            {isLoading
                ? (
                    <div style={{color:'yellow',fontWeight:'700'}}>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading} style={
                            {
                            backgroundColor:'blueviolet',
                            color: 'white',
                            border: 'solid 1px blueviolet',
                            borderRadius: '3px'}
                        }>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10

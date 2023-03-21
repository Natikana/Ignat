

type InitType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitType = initState, action: LoadingT): InitType => { // fix any
    switch (action.type) {
        case "ADD-LOADING-FALSE": {
            return {...state, isLoading: action.payload.isLoading}
        }
        case "ADD-LOADING-TRUE": {
            return {...state, isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = () => {
    return {
        type: 'ADD-LOADING-FALSE',
        payload: {
            isLoading: false,
        }
    } as const
}
export const loadingTrueAC = () => {
    return {
        type: 'ADD-LOADING-TRUE',
        payload: {
            isLoading: true,
        }
    } as const
}
export type LoadingType = ReturnType<typeof loadingAC>
export type LoadingTrueType = ReturnType<typeof loadingTrueAC>
export type LoadingT = LoadingType | LoadingTrueType
// fix any
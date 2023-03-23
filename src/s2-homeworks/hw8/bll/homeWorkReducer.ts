import {UserType} from "../HW8";

export type ActionSort = {
    type: 'sort'
    payload: 'up' | 'down'
}
export type ActionCheck = {
    type: 'check'
    payload: number
}
export type ActionType = ActionSort | ActionCheck

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // /need to fix any

    switch (action.type) {
        case 'sort': {
            let newState = state.map(el => ({...el}))
            newState.sort((a, b) => a.name > b.name ? 1 : -1)
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default: return state
    }
}
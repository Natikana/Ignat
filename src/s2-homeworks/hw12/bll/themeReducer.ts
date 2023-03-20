const initState: InitStateType = {
    themeId: 1,
}
type InitStateType = {
    themeId: number
}
export const themeReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
type ActionsType = ChangeThemeIdType
type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)


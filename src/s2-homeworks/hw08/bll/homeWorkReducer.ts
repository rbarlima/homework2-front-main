import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {

            let stateCopy = [...state]
            if (action.payload === 'up') {
                stateCopy = [...state].sort((a, b) => {
                   return  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                })
            }
            if (action.payload === 'down') {
                stateCopy = [...state].sort((a, b) => {
                   return  a.name < b.name ? 1 : a.name > b.name ? -1 : 0
                })
            }
            return stateCopy

        }
        case 'check': {
            return [...state.filter((a:UserType) => a.age > 18)]
        }
        default:
            return state
    }
}

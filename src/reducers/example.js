import * as types from "../constants/actions";

export const initialState = {
    on: false
}

export const actions = {
    [types.CHANGE_ACTION]: (state, action) => {
        const { on } = action

        return {
            ...state,
            on
        }
    }
}

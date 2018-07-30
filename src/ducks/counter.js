
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const 


let initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: [] 
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, currentValue: state.currentValue + action.payload }
        case DECREMENT:
            return { ...state, currentValue: state.currentValue - action.payload }
        default:
            return state
    }
}

export function increment (num) {
    return {
        type: INCREMENT,
        payload: num
    }
}

export function decrement (num) {
    return {
        type: DECREMENT,
        payload: num
    }
}

export function undo () {
    return {
        
    }
}

export function redo () {
    return {

    }
}





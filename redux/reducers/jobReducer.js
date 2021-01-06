import {CREATE_JOBS, FETCH_JOBS} from '../actions/jobAction';

const intialState = {
    jobs: []
}

export default function(state = intialState, action) {

    switch(action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                jobs: action.payload
            }
        
        case CREATE_JOBS:
            // console.log(action.payload)
            return {
                ...state,
                jobs: state.jobs.concat(action.payload.data)
            }
    }

    return state;
}
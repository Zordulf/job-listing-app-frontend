import {CREATE_JOBS, FETCH_JOBS, DELETE_JOB} from '../actions/jobAction';

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

        case DELETE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter(item => item.data !== action.payload)
            }
    }

    return state;
}
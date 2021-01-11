export const FETCH_JOBS = 'FETCH_JOBS';
export const CREATE_JOBS = 'CREATE_JOBS';
export const DELETE_JOB = 'DELETE_JOB';

export const fetchJobs = () => {
  return async dispatch => {

    //logic to fetch jobs from API
    const result = await fetch('http://10.65.208.49:3000/api/jobs/');

    const resultData = await result.json();

    dispatch({
      type: FETCH_JOBS,
      payload: resultData
    });
  }
}

export const createJob = ({position, description, location, skills, salary, image}) => {
  return async dispatch => {
    const response = await fetch('http://10.65.208.49:3000/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        position,
        description,
        location,
        skills,
        salary,
        image
      })
    })

    const responseData = await response.json();
    // console.log(responseData);

    dispatch({
      type: CREATE_JOBS,
      payload: responseData
    })
  }
}

export const deleteJob = (jobId) => {
  return async dispatch => {

    //logic to fetch jobs from API
    const result = await fetch(`http://10.65.208.49:3000/api/jobs/${jobId}`, {method: 'DELETE',})

    const resultData = await result.json();

    console.log(resultData);

    dispatch({
      type: DELETE_JOB,
      payload: resultData
    });
  }
}
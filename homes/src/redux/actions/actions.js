import axios from 'axios';
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES";
export const GET_ALL_AGENTS = "GET_ALL_AGENTS";

const getProperties = () => {
    return async function (dispatch) {
        try {
            let res = await axios.get('http://localhost:3001/properties');
            return dispatch({
                type: GET_ALL_PROPERTIES,
                payload: res.data
            })
        } catch (err) {
            throw err;
        }
    };
};

const getAgents = () => {
  return async function (dispatch) {
    try {
        let res = await axios.get('http://localhost:3001/agents');
        return dispatch({
            type: GET_ALL_AGENTS,
            payload: res.data
        });
    } catch (err) {
        throw err;
    }
  }
};

const postProperty = (formData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3001/properties', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return res;
    } catch (err) {
        throw err;
    }
  }
};

export {
    getProperties,
    getAgents,
    postProperty
};
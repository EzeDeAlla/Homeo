import axios from 'axios';
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES";


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

export {
    getProperties,
};
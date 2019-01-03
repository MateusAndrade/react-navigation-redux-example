import config from '../config/config';

const errorResponse = { success: false, error: { message: 'Error Calling API' } };

export const fetchUser = async () => {
  try {
    const response = await fetch(config.API_URL);
    if (response.status === 200) {
      const responseJson = await response.json();
      const { results } = responseJson; 
      return { success: true, payload: results[0] };
    } 
    return errorResponse;
  } catch (error) {
    return errorResponse;
  }
};
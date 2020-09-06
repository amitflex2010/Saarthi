
import { CHANGE_LANGUAGE } from './types';

export const changeLanguage = (language) => dispatch => {
 console.log(language)
  dispatch({
    type: CHANGE_LANGUAGE,
    payload: { language }
  });

};

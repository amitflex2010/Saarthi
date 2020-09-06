import { CHANGE_LANGUAGE } from '../actions/types';
import { LOCALES } from '../i18nProvider/constants'

const initialState = {
    locale: LOCALES.ENGLISH
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LANGUAGE:
      return {...state, locale: payload.language };
    default:
      return state;
  }
}

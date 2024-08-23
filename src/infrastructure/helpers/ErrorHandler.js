import {ErrorIdentity} from '../../infrastructure/enums/index';
import {ErrorTexts} from '../../infrastructure/utils/strings';

const generateErrorMesssage = response => {
  return response.status === ErrorIdentity.InterverServerError
    ? ErrorTexts.intervalServer
    : response.error;
};

export default {
  generateErrorMesssage,
};

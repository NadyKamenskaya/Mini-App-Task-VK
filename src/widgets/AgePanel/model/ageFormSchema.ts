import * as yup from 'yup';

import { requiredName } from '../../../shared/helpers/validations/validations';

export const ageFormSchema = yup.object<FormData>().shape({
  name: requiredName,
});

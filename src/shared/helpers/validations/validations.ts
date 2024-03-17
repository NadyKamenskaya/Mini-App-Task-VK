import * as yup from 'yup';

export const latinLetters = /[A-Za-z]/g;

export const requiredName = yup
  .string()
  .trim()
  .required('Поле не должно быть пустым')
  .matches(latinLetters, 'Допустим ввод только латинских букв');

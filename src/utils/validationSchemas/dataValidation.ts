import * as yup from 'yup';

const userId = yup.number().integer().positive();
const requiredUserId = userId.required();

const fullName = yup.string()
  .trim()
  .min(2, 'please enter correctly name & last name')
  .max(40, 'please enter correctly name & last name')
  .test('is-full-name', 'Please enter both your first and last name', (value) => {
    const nameArray = value?.split(' ');
    return nameArray!.length >= 2;
  });
const requiredFullName = fullName.required('this field is required');

const email = yup.string()
  .trim()
  .lowercase()
  .email('please enter valid email');
const requiredEmail = email.required('this field is required');

const dob = yup.date();
const requiredDob = dob.required('this field is required, example enter: YYYY-DD-MM ');

const password = yup.string()
  .trim()
  .min(3, 'password cannot be shorter than 3 characters')
  .max(8, 'password cannot be longer than 8 character');
const requiredPassword = password.required('this field is required');

const confirmPassword = yup.string()
  .oneOf([yup.ref('password'), undefined], 'entered password must be the same')
  .required('this field is required');

const newPassword = yup.string()
  .trim()
  .required('this field is required')
  .min(3, 'password cannot be shorter than 3 characters')
  .max(8, 'password cannot be longer than 8 character');

const confirmNewPassword = yup.string()
  .oneOf([yup.ref('newPassword'), undefined], 'entered password must be the same')
  .required('this field is required');

export default {
  userId,
  fullName,
  email,
  dob,
  password,
  confirmPassword,
  requiredPassword,
  confirmNewPassword,
  newPassword,
  requiredDob,
  requiredEmail,
  requiredFullName,
  requiredUserId,
};

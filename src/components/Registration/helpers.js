import * as Yup from 'yup';

export const initialValues = {
    email: '',
    name: '',
    password: '',
    password_confirm: '',
    
}

export const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Пароль должен содержать не менее 8 символов')
        .max(15, 'Пароль должен содержать не более 15 символов')
        .required('Обазательное поле для заполнения')
        .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
        .matches(/(?=.*[!@#$%^&*])/, 'Пароль должен содержать хотя бы один специальный символ'),
    email: Yup.string()
        .email('Неправильный формат email адреса')
        .required('Обязательное поле для заполнения'),
    name: Yup.string()
        .required('Обазательное поле для заполнения'),
    password_confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Обязательное поле для заполнения'),
});


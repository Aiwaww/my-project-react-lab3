import { Form, Formik } from 'formik';
import { MyButton } from './MyButton';
import { MyInput } from './MyInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const navigate = useNavigate();

  async function handleRegister({ email, password }) {
    try {
      const { data } = await axios.post('/auth/register', {
        email,
        password,
      });

      setItem('TOKEN', data.token);
      setItem('EMAIL', email);
      navigate('/profile');
    } catch (e) {
      console.log(e);
      alert('Something went wrong!');
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handleRegister(values)}
    >
      <Form className="form">
        <MyInput name={'email'} placeholder="Email" />
        <MyInput name={'password'} placeholder="Password" />
        <MyButton text="Register" type="submit" />
      </Form>
    </Formik>
  );
};

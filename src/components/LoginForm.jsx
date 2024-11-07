import axios from 'axios';
import { MyButton } from './MyButton';
import { MyInput } from './MyInput';
import { Form, Formik } from 'formik';
import { setItem } from '../helper/localStore';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  async function handleLogin({ email, password }) {
    try {
      const { data } = await axios.post('/auth/login', { email, password });

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
      initialValues={{
        email: 'pasfp@google.com',
        password: '123456',
      }}
      onSubmit={values => handleLogin(values)}
    >
      <Form className="form">
        <MyInput name={'email'} placeholder="Email" />
        <MyInput name={'password'} placeholder="Password" />
        <MyButton text="Login" type="submit" />
      </Form>
    </Formik>
  );
};

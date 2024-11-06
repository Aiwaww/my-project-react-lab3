import { MyButton } from './MyButton';
import { MyInput } from './MyInput';

export const LoginForm = () => {
  return (
    <form className="login-form">
      <MyInput name={'email'} placeholder="Email" />
      <MyInput name={'password'} placeholder="Password" />
      <MyButton text="Login" />
    </form>
  );
};

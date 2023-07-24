import { UserWindow } from "../../../common/UserWindow";

export const Login = () => {
  return (
    <UserWindow
      userName={"Login/E-mail"}
      password={"Password"}
      nameLink1={"Forgot your password?"}
      navLink1={"/login-recover"}
      button={"Sign in"}
      nameLink2={"Create account"}
      navLink2={"/register"}
    />
  );
};

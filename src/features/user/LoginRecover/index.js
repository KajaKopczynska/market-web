import { UserWindow } from "../../../common/UserWindow";

export const LoginRecover = () => {
  return (
    <UserWindow
      paragraph={"We will send you an email to reset your password"}
      userName={"E-mail"}
      button={"Submit"}
      nameLink1={"Canel"}
      navLink1={"/login"}
      loginRecover
    />
  );
};
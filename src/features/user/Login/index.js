import { UserWindow } from "../../../common/UserWindow";
import { toCreateAccount } from "../../../routes";

export const Login = () => {
  return (
    <UserWindow
      userName={"Login"}
      password={"Password"}
      button={"Sign in"}
      nameLink={"Create account"}
      navLink={"/createAccount"}
    />
  );
};

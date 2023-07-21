import { UserWindow } from "../../../common/UserWindow";
import { toCreateAccount } from "../../../root/routes";

export const Login = () => {
  return (
    <UserWindow
      userName={"Login"}
      password={"Password"}
      button={"Sign in"}
      nameLink={"Create account"}
      navLink={toCreateAccount}
    />
  );
};

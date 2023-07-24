// import { toShopRules } from "../../../root/routes";
import { UserWindow } from "../../../common/UserWindow";

export const CreateAccount = () => (
  <UserWindow
    userName={"User Name"}
    email={"E-mail"}
    password={"Password"}
    nameLink1={"Already have an account? Sign in"}
    navLink1={"/login"}
    button={"Create"}
    createAccount
  />
);

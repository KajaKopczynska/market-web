// import { toShopRules } from "../../../root/routes";
import { UserWindow } from "../../../common/UserWindow";

export const CreateAccount = () => (
  <UserWindow
    userName={"User Name"}
    email={"E-mail"}
    password={"Password"}
    button={"Create"}
    createAccount
  />
);

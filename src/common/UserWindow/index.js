import { Button, Input, InputName, Paragraph, UserForm, StyledNavLink } from "./styled";

export const UserWindow = ({
    userName,
    password,
    button,
    paragraph,
    nameLink,
    navLink,
    email,
    createAccount,
}) => {
    return (
        <UserForm>
            <InputName>{userName}</InputName>
            <Input></Input>
            <InputName>{password}</InputName>
            <Input></Input>
            {createAccount ? (
                <>
                    <InputName>{email}</InputName>
                    <Input></Input>
                </>
            ) : (
                ""
            )}
            <Button>{button}</Button>
            <Paragraph>
                {paragraph}
                <StyledNavLink to={navLink}>{nameLink}</StyledNavLink>
            </Paragraph>
        </UserForm>
    );
};

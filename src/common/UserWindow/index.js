import { Button, Input, InputName, Paragraph, UserForm, StyledNavLink } from "./styled";

export const UserWindow = ({
    userName,
    password,
    button,
    paragraph,
    nameLink1,
    navLink1,
    nameLink2,
    navLink2,
    email,
    createAccount,
}) => {
    return (
        <UserForm>
            <InputName>{userName}</InputName>
            <Input></Input>
            {createAccount ? (
                <>
                    <InputName>{email}</InputName>
                    <Input></Input>
                </>
            ) : (
                ""
            )}
            <InputName>{password}</InputName>
            <Input></Input>
            <Paragraph>
                <StyledNavLink to={navLink1}>{nameLink1}</StyledNavLink>
            </Paragraph>
            <Button>{button}</Button>
            <Paragraph>
                {paragraph}
                <StyledNavLink to={navLink2}>{nameLink2}</StyledNavLink>
            </Paragraph>
        </UserForm>
    );
};

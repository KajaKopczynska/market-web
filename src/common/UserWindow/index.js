import { Button, Input, InputName, Paragraph, UserForm, StyledNavLink, InputWrapper, FormTitle } from "./styled";

export const UserWindow = ({
    button,
    paragraph,
    nameLink1,
    navLink1,
    nameLink2,
    navLink2,
    createAccount,
    loginRecover,
}) => {
    return (
        <UserForm>
            <FormTitle>
                {createAccount ? "Create account" : (loginRecover ? "Reset your password" : "Login")}
            </FormTitle>
            <Paragraph>
                {paragraph}
            </Paragraph>
            <InputWrapper>
                {createAccount ? (
                    <>
                        <Input
                            // value={fullname}
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                    </>
                ) : (
                    ""
                )}
                <Input
                    // value={email}
                    type="email"
                    placeholder="Email"
                    required
                />
                {loginRecover ? (
                    ""
                ) : (
                    <>
                        <Input
                            // value={password}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </>
                )}
            </InputWrapper>
            <Paragraph>
                <StyledNavLink to={navLink1}>{nameLink1}</StyledNavLink>
            </Paragraph>
            <Button>{button}</Button>
            <Paragraph>
                <StyledNavLink to={navLink2}>{nameLink2}</StyledNavLink>
            </Paragraph>
        </UserForm>
    );
};

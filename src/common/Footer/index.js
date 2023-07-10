import { FooterIcon, FooterSection, Input, InputButton, InputWrapper, NewsletterWrapper, StyledFooter } from "./styled";
import planeIcon from "./images/PlaneIcon.svg";

const Footer = () => {

    return (
        <>
            <StyledFooter>
                <FooterSection>
                    <NewsletterWrapper>
                        <FooterIcon src={planeIcon} alt="newsletter" />
                        <h2>Sign Up for Newsletter</h2>
                        <InputWrapper>
                            <Input
                                placeholder={`Your Email Adress`}
                            // value={query || ""}
                            // onChange={oninputChange}
                            />
                            <InputButton>
                                SUBSCRIBE
                            </InputButton>
                        </InputWrapper>
                    </NewsletterWrapper>
                </FooterSection>
                <FooterSection>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </FooterSection>
                <FooterSection>
                    &copy; {new Date().getFullYear()}: Powered by Kaja Kopczyńska
                </FooterSection>
            </StyledFooter>
        </>
    );
};

export default Footer;
import { FooterIcon, FooterInfo, FooterInfoContent, FooterInfoElement, FooterInfoTitle, FooterSection, FooterWrapper, Input, InputButton, InputWrapper, NewsletterWrapper, StyledFooter, StyledLink } from "./styled";
import planeIcon from "./images/PlaneIcon.svg";
import { SocialIcons } from "./SocialIcons";

const Footer = () => {

    return (
        <>
            <StyledFooter>
                <FooterWrapper>
                    <FooterSection>
                        <NewsletterWrapper>
                            <FooterIcon src={planeIcon} alt="newsletter" />
                            <h2>Sign Up for Newsletter</h2>
                            <InputWrapper>
                                <Input
                                    placeholder={`Your Email Adress`}
                                // onChange={oninputChange}
                                />
                                <InputButton>
                                    SUBSCRIBE
                                </InputButton>
                            </InputWrapper>
                        </NewsletterWrapper>
                    </FooterSection>
                    <FooterSection>
                        <FooterInfo>
                            <FooterInfoElement>
                                <FooterInfoTitle>Contact Us</FooterInfoTitle>
                                <FooterInfoContent>
                                    <adress>
                                        Book Shop <br />
                                        ul. Kolorowa 21/37 <br />
                                        71-420 Szczecin <br />
                                        Poland
                                    </adress>
                                    <StyledLink contactInfo href="tel: +48 123(456)789">+48 123 456 789</StyledLink>
                                    <StyledLink contactInfo href="mailto: bookshop@bookshop.com">bookshop@bookshop.com</StyledLink>
                                    <SocialIcons />
                                </FooterInfoContent>
                            </FooterInfoElement>
                            <FooterInfoElement>
                                <FooterInfoTitle>Information</FooterInfoTitle>
                                <FooterInfoContent>
                                    <StyledLink>Privacy Policy</StyledLink>
                                    <StyledLink>Refund Policy</StyledLink>
                                    <StyledLink>Shipping Policy</StyledLink>
                                    <StyledLink>Terms Of Service</StyledLink>
                                </FooterInfoContent>
                            </FooterInfoElement>
                            <FooterInfoElement>
                                <FooterInfoTitle>Account</FooterInfoTitle>
                                <FooterInfoContent>
                                    <StyledLink>Search</StyledLink>
                                    <StyledLink>About Us</StyledLink>
                                    <StyledLink>Faq</StyledLink>
                                    <StyledLink>Contact</StyledLink>
                                </FooterInfoContent>
                            </FooterInfoElement>
                            <FooterInfoElement>
                                <FooterInfoTitle>Quick Links</FooterInfoTitle>
                                <FooterInfoContent>
                                    <StyledLink to="/books">Books</StyledLink>
                                    <StyledLink to="/audiobooks">Audiobooks</StyledLink>
                                    <StyledLink to="/cooming-soon">Music</StyledLink>
                                    <StyledLink to="/cooming-soon">Games</StyledLink>
                                </FooterInfoContent>
                            </FooterInfoElement>
                        </FooterInfo>
                    </FooterSection>
                    <FooterSection>
                        &copy; {new Date().getFullYear()}: Powered by Kaja Kopczyńska
                    </FooterSection>
                </FooterWrapper>
            </StyledFooter>
        </>
    );
};

export default Footer;
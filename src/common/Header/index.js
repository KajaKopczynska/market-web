import { Search } from "../../features/Search";
import { StyledHeader, Wrapper, TitleLink, TittleText, Navigation, StyledNavLink, StyledBookIcon, NavigationWrapper, StyledUserAccountIcon, StyledClipboardIconIcon, StyledClipboardIcon, StyledBasketIcon } from "./styled";


const Header = () => {

    return (
        <StyledHeader>
            <Wrapper>
                <TitleLink>
                    <StyledBookIcon />
                    <TittleText>Book Shop</TittleText>
                </TitleLink>
                <Search />
                <NavigationWrapper>
                    <nav>
                        <Navigation>
                            <li>
                                <StyledNavLink>
                                    <StyledUserAccountIcon />
                                    ACCOUNT
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink>
                                    <StyledClipboardIcon />
                                    CLIPBOARD
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink>
                                    <StyledBasketIcon />
                                    BASKET
                                </StyledNavLink>
                            </li>
                        </Navigation>
                    </nav>
                </NavigationWrapper>

            </Wrapper>
        </StyledHeader>
    );
};

export default Header;
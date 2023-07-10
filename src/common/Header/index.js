import { Search } from "../../features/Search";
import { CategoryMenu } from "./CategoryMenu";
import {
    StyledHeader,
    Wrapper,
    TitleLink,
    Navigation,
    StyledNavLink,
    StyledBookIcon,
    NavigationWrapper,
    StyledUserAccountIcon,
    StyledClipboardIcon,
    StyledBasketIcon,
    SearchWrapper,
    CategoryMenuWrapper,
    NavLinkText,
    TitleText,
} from "./styled";

const Header = () => {

    return (
        <StyledHeader>
            <Wrapper>
                <TitleLink>
                    <StyledBookIcon />
                    <TitleText>Book Shop</TitleText>
                </TitleLink>
                <SearchWrapper>
                    <Search />
                </SearchWrapper>
                <NavigationWrapper>
                    <nav>
                        <Navigation>
                            <li>
                                <StyledNavLink>
                                    <StyledUserAccountIcon />
                                    <NavLinkText>
                                        ACCOUNT
                                    </NavLinkText>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink>
                                    <StyledClipboardIcon />
                                    <NavLinkText>
                                        CLIPBOARD
                                    </NavLinkText>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink>
                                    <StyledBasketIcon />
                                    <NavLinkText>
                                        BASKET
                                    </NavLinkText>
                                </StyledNavLink>
                            </li>
                        </Navigation>
                    </nav>
                </NavigationWrapper>
                <CategoryMenuWrapper>
                    <CategoryMenu />
                </CategoryMenuWrapper>
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;
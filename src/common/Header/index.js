import { Search } from "../../features/Search";
import { toCreateAccount } from "../../routes";
import { CategoryMenu } from "./CategoryMenu";
import { TopMenu } from "./TopMenu";
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
            <TopMenu></TopMenu>
            <Wrapper>
                <TitleLink to="/">
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
                                <StyledNavLink to="/login">
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
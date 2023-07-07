import { Search } from "../../features/Search";
import { CategoryMenu } from "./CategoryMenu";
import {
    StyledHeader,
    Wrapper,
    TitleLink,
    TittleText,
    Navigation,
    StyledNavLink,
    StyledBookIcon,
    NavigationWrapper,
    StyledUserAccountIcon,
    StyledClipboardIcon,
    StyledBasketIcon,
    SearchWrapper,
    CategoryMenuWrapper,
} from "./styled";


const Header = () => {

    return (
        <StyledHeader>
            <Wrapper>
                <TitleLink>
                    <StyledBookIcon />
                    <TittleText>Book Shop</TittleText>
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
                <CategoryMenuWrapper>
                    <CategoryMenu />
                </CategoryMenuWrapper>
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;
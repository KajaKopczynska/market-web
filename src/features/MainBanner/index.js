import { useState } from "react";
import firstBanner from "./images/BestSellingCrime.jpg";
import secondBanner from "./images/SummerRead.png";
import { BannerLink, IconWrapper, MainBannerContent, MainBannerWrapper, Poster, StyledIconNext, StyledIconPrevious, Wrapper } from "./styled";

const MainBanner = () => {
	const [mainBanner, setMainBanner] = useState(true);

	const handleNextClick = () => {
		setMainBanner(!mainBanner);
	};

	return (
		<>
			<MainBannerWrapper>
				<Wrapper>
					<Poster
						src={!mainBanner ? firstBanner : secondBanner}
						className={mainBanner ? "fade-in" : ""}
						alt="main banner"
						second={mainBanner}
					/>
					{/* <MainBannerContent>
            <BannerLink>BUY NOW</BannerLink>
          </MainBannerContent> */}
				</Wrapper>
				<IconWrapper>
					<StyledIconPrevious onClick={() => setMainBanner(!mainBanner)} />
					<StyledIconNext onClick={handleNextClick} />
				</IconWrapper>
			</MainBannerWrapper>
		</>
	);
};

export default MainBanner;

import { useState } from "react";
import firstBanner from "./images/BestSellingCrime.jpg";
import secondBanner from "./images/SummerRead.png";
import { BannerLink, MainBannerContent, MainBannerWrapper, Poster, StyledIconNext, StyledIconPrevious, Wrapper } from "./styled";

const MainBanner = () => {
  const [mainBanner, setMainBanner] = useState(false);

  const handleNextClick = () => {
    setMainBanner(!mainBanner);
  };

  return (
    <>
      <MainBannerWrapper>
        <Wrapper>
          <Poster
            src={mainBanner ? secondBanner : firstBanner}
            className="img-fluid rounded-3"
            alt="main banner"
            second={mainBanner}
          />
          <MainBannerContent>
            <BannerLink>BUY NOW</BannerLink>
          </MainBannerContent>
        </Wrapper>
        <StyledIconPrevious onClick={() => setMainBanner(!mainBanner)} />
        <StyledIconNext onClick={handleNextClick} />
      </MainBannerWrapper>
    </>
  );
};

export default MainBanner;

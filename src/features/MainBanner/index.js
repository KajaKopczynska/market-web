
import mainBanner from "./images/BestSellingCrime.jpg";
import { BannerLink, MainBannerContent, MainBannerWrapper, Poster, SmallBannerContent, Wrapper } from "./styled";

const MainBanner = () => {

	return (
		<>
			<section className="home-wrapper-1 py-5">
				<div className="container-xxl">
					<div className="row">
						<MainBannerWrapper>
							{/* <div className="col-6"> */}
							<Wrapper>
								{/* <div className="main-banner-content position-relative p-3"> */}
								<Poster
									src={mainBanner}
									className="img-fluid rounded-3"
									alt="main banner"
								/>
								<MainBannerContent>
									{/* <div className="main-banner-content position-absolute"> */}
									<BannerLink>BUY NOW</BannerLink>
									{/* </div> */}
								</MainBannerContent>
								{/* </div> */}
							</Wrapper>
							{/* </div> */}
						</MainBannerWrapper>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainBanner;
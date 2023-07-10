import serviceIcon from "./images/service.png";
import serviceIcon2 from "./images/service-02.png";
import serviceIcon3 from "./images/service-03.png";
import serviceIcon4 from "./images/service-04.png";
import serviceIcon5 from "./images/service-05.png";
import { ServicesBannerWrapper, ServicesIcon, ServicesIconWrapper, ServicesText, ServicesTitle, Wrapper } from "./styled";


const HomeServicesBanner = () => {

	return (
		<>
			<ServicesBannerWrapper>
				{/* <div className="col-6"> */}
				<Wrapper>
					<ServicesIconWrapper>
						<ServicesIcon src={serviceIcon} alt="services" />
						<div>
							<ServicesTitle>Free Shipping</ServicesTitle>
							<ServicesText>From all orders over $50</ServicesText>
						</div>
					</ServicesIconWrapper>
					<ServicesIconWrapper>
						<ServicesIcon src={serviceIcon2} alt="services" />
						<div>
							<ServicesTitle>Daily Surprise Offers</ServicesTitle>
							<ServicesText>Save up to 25% off</ServicesText>
						</div>
					</ServicesIconWrapper>
					<ServicesIconWrapper>
						<ServicesIcon src={serviceIcon3} alt="services" />
						<div>
							<ServicesTitle>Support 24/7</ServicesTitle>
							<ServicesText>Shop with an expert</ServicesText>
						</div>
					</ServicesIconWrapper>
					<ServicesIconWrapper>
						<ServicesIcon src={serviceIcon4} alt="services" />
						<div>
							<ServicesTitle>Affordable Prices</ServicesTitle>
							<ServicesText>Get Factory direct price</ServicesText>
						</div>
					</ServicesIconWrapper>
					<ServicesIconWrapper>
						<ServicesIcon src={serviceIcon5} alt="services" />
						<div>
							<ServicesTitle>Secure Payments</ServicesTitle>
							<ServicesText>100% Protected Payments</ServicesText>
						</div>
					</ServicesIconWrapper>
				</Wrapper>
				{/* </div> */}
			</ServicesBannerWrapper>
		</>
	);
};

export default HomeServicesBanner;
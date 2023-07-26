import React from 'react';
import { Container } from "../../common/Container";
import { SectionTitle} from "../../common/SectionTitle";
import Category from "./Category";
import { CategoryListWrapper } from "./styled";

const CategoryList = ({ categories }) => {

	return (
		<>
			<Container>
				<SectionTitle>Popular Categories</SectionTitle>
				<CategoryListWrapper>
					{categories.map(category => (
						<Category
							key={category.id}
							imgSrc={category.image}
							title={category.title}
							link={category.link}
						/>
					))}
				</CategoryListWrapper>
			</Container>
		</>
	);
};

export default CategoryList;
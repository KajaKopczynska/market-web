import React from 'react';
import { Container } from "../../common/Container";
import { SectionTitle} from "../../common/SectionTitle";
import { CategoryListWrapper } from "./styled";
import CategoryTile from './CategoryTile';

const CategoryList = ({ categories }) => {

	return (
		<>
			<Container>
				<SectionTitle>Popular Categories</SectionTitle>
				<CategoryListWrapper>
					{categories.map(category => (
						<CategoryTile
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
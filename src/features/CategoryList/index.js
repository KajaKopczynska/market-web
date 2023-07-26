import React from 'react'
import Category from "./Category";
import { CategoryListWrapper, Title } from './styled';
import { Container } from '../../common/Container';

const CategoryList = ({ categories }) => {

	return (
		<>
			<Container>
				<Title>Popular Categories</Title>
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
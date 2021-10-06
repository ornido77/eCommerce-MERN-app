import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Container = styled.div``;

const Title = styled.div``;
const FilterContainer = styled.div``;
const Filter = styled.div``;
const FilterText = styled.span``;
const Select = styled.select``;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
				</Filter>
			</FilterContainer>
		</Container>
	);
};

export default ProductList;

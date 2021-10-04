import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
`;
const Center = styled.div`
	flex: 1;
`;
const Right = styled.div`
	flex: 1;
`;

const Language = styled.span`
	font-style: 14px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<NavContainer>
			<Wrapper>
				<Left>
					<Language>EN</Language>
				</Left>
				<Center>Center</Center>
				<Right>Right</Right>
			</Wrapper>
		</NavContainer>
	);
};

export default Navbar;

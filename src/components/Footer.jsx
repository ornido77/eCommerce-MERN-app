import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const Container = styled.div`
	display: flex;
	align-items: center;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
	margin: 20px 0;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h1`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const footer = () => {
	return (
		<Container>
			<Left>
				<Logo>BILIna.</Logo>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
					in odit nesciunt officiis alias quae quod explicabo ipsum,
					fugiat, minima dolores soluta vel nobis sequi. Tempora
					praesentium nemo eveniet repellendus.
				</Description>
				<SocialContainer>
					<SocialIcon>
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon>
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon>
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon>
						<LinkedInIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<RoomIcon style={{ marginRight: "10px" }} /> #343 Bagong
					Nayon, Bagbaguin, Velenzuela City
				</ContactItem>
				<ContactItem>
					<PhoneIcon style={{ marginRight: "10px" }} /> +63968 533
					0471
				</ContactItem>
				<ContactItem>
					<MailOutlinedIcon style={{ marginRight: "10px" }} />{" "}
					sonnornido0@gmail.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default footer;

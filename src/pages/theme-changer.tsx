import { Layout } from "@/Components";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import {
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import Cookie from 'js-cookie';
import { GetServerSideProps } from "next";
import axios from "axios";


interface Props{
	theme: string;
}

const ThemeChanger:FC<Props> = (props) => {

	const [currentTheme, setCurrentTheme] = useState("light");

	const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
		const theme = e.target.value;
		setCurrentTheme(e.target.value);
		console.log(e.target.value);

		localStorage.setItem('theme', theme);
		Cookie.set('theme', theme);
		
	};

	useEffect(() => {

	}, [])
	

	const onClickAxios = async () => {
		const resp = await axios.get("/api/hello");
		console.log(resp.data);
	}


	return (
		<Layout>
			<Card>
				<CardContent>
					<FormControl>
						<FormLabel>Tema</FormLabel>
						<RadioGroup value={currentTheme} onChange={onChangeRadio}>
							<Container
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<FormControlLabel
									value="light"
									control={<Radio />}
									label="Light"
								/>
								<WbSunnyRoundedIcon />
							</Container>
							<Container
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
							>
								<FormControlLabel
									value="dark"
									control={<Radio />}
									label="Dark"
								/>
								<DarkModeRoundedIcon />
							</Container>
							<Container
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
							>
								<FormControlLabel
									value="custom"
									control={<Radio />}
									label="Custom"
								/>
								<DashboardCustomizeRoundedIcon />
							</Container>
						</RadioGroup>

						<Button
							color="success"
							variant="contained"
							onClick={onClickAxios}
						>
							Solicitud
						</Button>
					</FormControl>
				</CardContent>
			</Card>
		</Layout>
	);
}


export const getServerSideProps: GetServerSideProps = async ({req}) => {

	const { theme = 'dark' } = req.cookies;
	const validThemes = ['light', 'dark', 'custom'];

	return {
		props:{
			theme: validThemes.includes(theme) ? theme : 'dark',
		}
	}
}


export default ThemeChanger;

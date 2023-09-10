import NextLink from "next/link";
import { AppBar, Toolbar, IconButton, Link, Typography } from "@mui/material";
import { MenuOpenOutlined } from "@mui/icons-material";

export const Navbar = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<Toolbar>
				<IconButton size="large" edge="start">
					<MenuOpenOutlined />
				</IconButton>

				<NextLink
					href="/"
					passHref
					style={{
						appearance: "none",
						textUnderlineOffset: "0",
						textTransform: "none",
						textDecoration: "none",
					}}
				>
					<Typography variant="h6" color="white">
						Cookies App
					</Typography>
				</NextLink>
				<div style={{ flex: 1 }}></div>
				<NextLink
					href="/theme-changer"
					passHref
					style={{
						appearance: "none",
						textUnderlineOffset: "0",
						textTransform: "none",
						textDecoration: "none",
					}}
				>
					<Typography
						variant="h6"
						color="white"
						sx={{
							appearance: "none",
							textUnderlineOffset: "0",
							textTransform: "none",
							textDecoration: "none",
						}}
					>
						Cambiar Tema
					</Typography>
				</NextLink>
			</Toolbar>
		</AppBar>
	);
};

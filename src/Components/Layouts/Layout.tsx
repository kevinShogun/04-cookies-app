import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Navbar } from "../UI/Navbar";

interface Props {
	children: ReactNode | ReactNode[];
}

export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<main className="px-[20px] py-[50px]">{children}</main>
		</>
	);
};

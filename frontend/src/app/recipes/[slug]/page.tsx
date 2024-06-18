"use client";

import { mockData } from "@/app/constants/data";
import {
	Breadcrumbs,
	CardMedia,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Divider from "@mui/material/Divider";

import AccessTime from "@mui/icons-material/AccessTime";
import PrintIcon from "@mui/icons-material/Print";
import AddIcon from "@mui/icons-material/Add";

import { styled } from "@mui/system";
import { Product } from "@/app/interfaces/product";

type PageProps = {
	params: { slug: string };
};

const ActionButton = styled(Button)(({ theme }) => ({
	borderColor: "#da1a32",
	"&:hover": {
		borderColor: "#da1a32",
	},
	borderRadius: 0,
	color: "black",
}));

export default function Home({ params }: PageProps) {
	const { slug } = params;

	const [data, setData] = useState<Product>();

	useEffect(() => {
		async function fetchData() {
			// Will call API inside this
			const product = mockData.find((item) => item.slug === slug);
			setData(product);
		}
		fetchData();
	}, [slug]);

	const breadcrumbs = [
		<Link key="1" color="inherit" href="/">
			Recipes
		</Link>,
		<Link key="2" color="inherit" href="/">
			Bread
		</Link>,
		<Link key="2" color="inherit" href="/">
			Quick bread
		</Link>,
	];

	return (
		<main>
			<Grid container spacing={2} padding={8}>
				<Grid item xs={6}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						{breadcrumbs}
					</Breadcrumbs>
					<Typography variant="h3" gutterBottom marginTop={4} marginBottom={8}>
						{data?.name}
					</Typography>
					<Typography variant="body1" marginBottom={4}>
						<p
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(data?.description || ""),
							}}
						/>
					</Typography>
					<Grid container spacing={8} paddingBottom={4}>
						<Grid item>
							<Grid container spacing={2}>
								<Grid item>
									<AccessTime />
								</Grid>
								<Grid item>
									<h6>PREP</h6>
									<p>{data?.prep}</p>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<h6>BAKE</h6>
							<p>{data?.bake}</p>
						</Grid>
						<Grid item>
							<h6>TOTAL</h6>
							<p>{data?.total}</p>
						</Grid>
					</Grid>
					<Divider />
					<Grid container spacing={8} paddingTop={4}>
						<Grid item>
							<Grid container spacing={2}>
								<Grid item>
									<AccessTime />
								</Grid>
								<Grid item>
									<h6>YIELD</h6>
									<p>{data?.yield}</p>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<ActionButton variant="outlined" startIcon={<AddIcon />}>
								SAVE RECIPE
							</ActionButton>
						</Grid>
						<Grid item>
							<ActionButton variant="outlined" startIcon={<PrintIcon />}>
								PRINT
							</ActionButton>
						</Grid>
					</Grid>
				</Grid>
				<Grid container xs={6} alignItems="center" justifyContent="center">
					<CardMedia
						component="img"
						width="50%"
						image={data?.thumbnail}
						alt={data?.name}
						sx={{ width: "50%" }}
					/>
				</Grid>
			</Grid>
		</main>
	);
}

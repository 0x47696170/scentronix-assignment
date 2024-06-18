"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Product } from "./interfaces/product";
import { mockData } from "./constants/data";
import ProductItem from "./components/ProductItem";
import { Grid } from "@mui/material";

export default function Home() {
	const [data, setData] = useState<Product[]>([]);

	useEffect(() => {
		async function fetchData() {
			// Will call API inside this
			setData(mockData);
		}
		fetchData();
	}, []);

	return (
		<main className={styles.main}>
			<Grid container spacing={4}>
				{data.map((item) => (
					<Grid key={item.slug} item>
            <ProductItem key={item.slug} data={item} />
          </Grid>
				))}
			</Grid>
		</main>
	);
}

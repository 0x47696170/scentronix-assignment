import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { Product } from "../interfaces/product";

export default function ProductItem({ data }: { data: Product }) {
	return (
		<Link href={`/recipes/${data?.slug}`}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					height="194"
					image={data?.thumbnail}
					alt={data?.name}
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{data?.name}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
}

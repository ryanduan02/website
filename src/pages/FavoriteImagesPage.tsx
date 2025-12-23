import { favoriteImages } from "../favorite-images/images";

export function FavoriteImagesPage() {
	return (
		<section className="favorite-images" aria-label="Favorite Images">
			<h3>These are images I come back to for inspiration</h3>
			<div className="imageGallery">
				{favoriteImages.map((image) => (
					<figure key={image.src} className="galleryItem">
						<img
							src={`${import.meta.env.BASE_URL}favorite-images/${image.src}`}
							alt={image.alt}
							className="galleryImage"
						/>
						{image.description && (
							<figcaption className="imageDescription">{image.description}</figcaption>
						)}
					</figure>
				))}
			</div>
		</section>
	);
}

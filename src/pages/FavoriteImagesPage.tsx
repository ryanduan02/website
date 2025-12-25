import { favoriteImages } from "../favorite-images/images";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function FavoriteImagesPage() {
	const location = useLocation();
	const navigate = useNavigate();

	const activeSrc = React.useMemo(() => {
		const pathname = location.pathname;
		if (pathname === "/favorite-images" || pathname === "/favorite-images/") return null;

		const match = pathname.match(/^\/favorite-images\/(.+)$/);
		if (!match) return null;

		try {
			return decodeURIComponent(match[1]);
		} catch {
			return null;
		}
	}, [location.pathname]);

	const activeImage = React.useMemo(
		() => favoriteImages.find((img) => img.src === activeSrc) ?? null,
		[activeSrc]
	);

	const handleBackClick = React.useCallback(() => {
		navigate("/favorite-images");
	}, [navigate]);

	const handleImageClick = React.useCallback(
		(src: string) => {
			navigate(`/favorite-images/${encodeURIComponent(src)}`);
		},
		[navigate]
	);

	if (activeImage) {
		return (
			<section className="favorite-images" aria-label="Favorite Image">
				<button
					type="button"
					className="favoriteImagesBack"
					onClick={handleBackClick}
				>
					← Back to images
				</button>

				<figure className="favoriteImageDetail">
					<img
						src={`${import.meta.env.BASE_URL}favorite-images/${activeImage.src}`}
						alt={activeImage.alt}
						className="favoriteImageFull"
					/>
					{activeImage.description ? (
						<figcaption className="imageDescription">{activeImage.description}</figcaption>
					) : null}
				</figure>
			</section>
		);
	}

	return (
		<section className="favorite-images" aria-label="Favorite Images">
			<h3>These are images I come back to for inspiration</h3>
			<div className="imageGallery">
				{favoriteImages.map((image) => (
					<figure key={image.src} className="galleryItem">
						<button
							type="button"
							className="galleryImageButton"
							onClick={() => handleImageClick(image.src)}
							aria-label={`Open image: ${image.alt}`}
						>
							<img
								src={`${import.meta.env.BASE_URL}favorite-images/${image.src}`}
								alt={image.alt}
								className="galleryImage"
							/>
						</button>
						{image.description && (
							<figcaption className="imageDescription">{image.description}</figcaption>
						)}
					</figure>
				))}
			</div>
		</section>
	);
}

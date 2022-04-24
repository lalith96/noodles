import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card({ countryName, imgUrl, brandName }) {
  return (
    <div className="card">
      {imgUrl && (
        <>
          <div className="image-container">
            <LazyLoadImage
              effect="blur"
              src={imgUrl}
              className="card-img-top lazy-img"
              alt="card-img"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{brandName}</h5>
          </div>
        </>
      )}
      {countryName && <p>{countryName}</p>}
    </div>
  );
}

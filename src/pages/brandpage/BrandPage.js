import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useBrandData } from "../../contexts/BrandContext";
import Card from "../../components/cards/Card";

export default function BrandPage() {
  const [imageData, setImageData] = useState();
  const paramData = useParams();
  const dataFromContext = useBrandData();
  let brandData = dataFromContext.brandData;
  if (brandData.length < 1) {
    brandData = JSON.parse(localStorage.getItem("brandDataInLocal"));
  }
  const filteredData = brandData.filter((item) => {
    return item.Country === paramData.country;
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json"
      );
      setImageData(response.data);
    })();
  }, []);

  const getRandom = () => {
    return Math.floor(Math.random() * (imageData.length - 1));
  };

  return (
    <>
      <center>
        <h1 className="page-heading">Brands of {paramData.country}</h1>
      </center>
      <div className="data-container">
        {filteredData &&
          imageData &&
          filteredData.map((item, index) => (
            <Link to={"/brand/" + item.id} key={index}>
              <Card
                imgUrl={imageData[getRandom()].Image}
                brandName={item.Brand}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

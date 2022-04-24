import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/cards/Card";
import { Link } from "react-router-dom";
import { useBrandData } from "../../contexts/BrandContext";

export default function LandingPage() {
  const [CountryData, setCountryData] = useState([]);
  const dataFromContext = useBrandData();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
      );
      const brandDataWithId = response.data.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      dataFromContext.setBrandData(brandDataWithId);
      localStorage.setItem("brandDataInLocal", JSON.stringify(brandDataWithId));
      const countries = new Set();
      response.data.map((item) => countries.add(item.Country));
      setCountryData([...countries]);
    })();
  });

  return (
    <>
      <center>
        <h1 className="page-heading">Countries</h1>
      </center>
      <div className="data-container">
        {CountryData &&
          CountryData.map((country) => (
            <Link to={"/" + country}>
              <Card countryName={country} />
            </Link>
          ))}
      </div>
    </>
  );
}

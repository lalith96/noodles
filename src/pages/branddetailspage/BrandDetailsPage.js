import { useParams } from "react-router-dom";
import { useBrandData } from "../../contexts/BrandContext";

export default function BrandDetailsPage() {
  const paramData = useParams();
  const dataFromContext = useBrandData();
  let brandData = dataFromContext.brandData;
  if (brandData.length < 1) {
    brandData = JSON.parse(localStorage.getItem("brandDataInLocal"));
  }
  const item = brandData[paramData.id - 1];
  return (
    <>
      <center>
        <h1 className="page-heading">Details of {item.Brand}</h1>
      </center>
      <div className="list-container">
        <ul className="list-group">
          <li key="1" className="list-group-item active" aria-current="true">
            Brand Name : {item.Brand}
          </li>
          <li key="2" className="list-group-item">
            Country : {item.Country}
          </li>
          <li key="3" className="list-group-item">
            Variety : {item.Variety}
          </li>
          <li key="4" className="list-group-item">
            Style :{" "}
            {item.Style !== "NaN" && item.Style !== "Nan"
              ? item.Style
              : "No Data"}
          </li>
          <li key="5" className="list-group-item">
            Ranking :{" "}
            {item["Top Ten"] !== "NaN" && item["Top Ten"] !== "Nan"
              ? item["Top Ten"]
              : "No Data"}
          </li>
          <li key="6" className="list-group-item">
            Rating :{" "}
            {item.Stars !== "NaN" && item.Stars !== "Nan"
              ? item.Stars
              : "No Data"}
          </li>
        </ul>
      </div>
    </>
  );
}

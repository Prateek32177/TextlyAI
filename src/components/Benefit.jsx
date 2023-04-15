import React from "react";
import BenefitSection from "./BenefiitSections";
import CategoryIcon from "@mui/icons-material/Category";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchemaIcon from '@mui/icons-material/Schema';

const benefitsdata =[
    {
        icon: <CategoryIcon style={{ width: "60px", height: "60px" }} />,
        tagLine:"Utilize Your Time Wisely",
        descp:"Refrain from typing manual data give it to us and get sorted data back",
    },
    {
        icon: <AnalyticsIcon style={{ width: "60px", height: "60px" }} />,
        tagLine:"AI Powered Classification",
        descp:"Effortlessly Organize Your Data with AI-powered Classification",
    },
    {
        icon: <SchemaIcon style={{ width: "60px", height: "60px" }} />,
        tagLine:"Get in the Format You want",
        descp:"Give us the data and get in the form You want",
    }
]



export default function Benefit() {
  return (
    <>
      <div style={{ width: "80vw", margin: "auto", padding: 0 }}>
        <h1 style={{ fontWeight: "bold", marginTop: "40px" }}>
          {" "}
          Get ahead of the competition with smarter AI classification.
        </h1>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
            {benefitsdata.map((data)=>(
                <BenefitSection icon={data.icon} tagLine={data.tagLine} description={data.descp} />
            ))}
         
        </div>
      </div>
    </>
  );
}

import React from "react";
import photo1 from "./door.jpg";
import { MDBBtn } from "mdb-react-ui-kit";

function Body() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${photo1})`,
        margin: "20px",
        marginTop: "60px",
        borderRadius: "20px",
        height: "400px",
      }}
    >
      <div
        className="mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "500px" }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">დაგვირეკეთ ახლავე</h1>
            <MDBBtn href="" tag="a" outline size="lg">
              დარეკვა
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;

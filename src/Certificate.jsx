import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import instElite from "./assets/Certificates/Elite-Ins.jpg";

const Certificate = () => {

  const generatePDF = async () => {
    const input = document.getElementById("certificate-container");

    const canvas = await html2canvas(input, { scale: 3 });
    const imgData = canvas.toDataURL("image/jpeg");

    const pdf = new jsPDF("portrait", "pt", "letter");

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );

    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Vigneshwaran", 270, 348);
    pdf.text("CIM12302024", 250, 510);
    pdf.text("India", 140, 540);
    pdf.text("Issue", 170, 572);
    pdf.save(`MyPDF.pdf`);
  };

  return (
    <div>
      <div id="certificate-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={instElite}
            alt="Student Certificate"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default Certificate;

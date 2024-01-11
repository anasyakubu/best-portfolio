import React from "react";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Assuming 'sample.pdf' is the name of your PDF file
    const pdfUrl = process.env.PUBLIC_URL + "/MY-CV-Resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute with the desired file name
    link.download = "downloaded_file.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadButton;

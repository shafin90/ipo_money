'use client'
import { LuUploadCloud } from "react-icons/lu";

const Careers = () => {
  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the selected file as needed
    console.log("Selected file:", selectedFile);
  };

  return (
    <div id="careers" className="w-11/12 mx-auto mb-96">
      <h1 className="text-center font-extrabold text-5xl text-slate-600 mb-16">
        Careers
      </h1>

      <div className=" relative hero bg-gray-50 transition-all text-slate-600 rounded-2xl py-24">
        <label htmlFor="fileInput" className="cursor-pointer border-4 border-dashed p-10 rounded-2xl">
          <LuUploadCloud className=" text-6xl transition-all text-gray-600" />
        </label>

        <input
          type="file"
          id="fileInput"
          accept=".pdf, .doc, .docx"
          className="hidden"
          onChange={handleFileUpload}
        />
        <h1 className=" text-center absolute bottom-10 text-xl font-semibold">Upload your Resume/CV </h1>
      </div>

    </div>
  );
};

export default Careers;

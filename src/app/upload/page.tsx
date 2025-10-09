"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
interface UploadPageProps {
    public_id: string
}

const UploadPage = () => {
    const [public_id, Set_public_id] = useState('');
    console.log("public_id", public_id);
  return (
    <>
    {public_id && (
        <CldImage src={public_id} alt="image" width={270} height={180} />
    )}
      <CldUploadWidget
        uploadPreset="zlypv6gj"
        onSuccess={(result) => {
          if (result.event !== "success") return;
            const id = result.info as UploadPageProps;
            Set_public_id(id.public_id)
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary rounded" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;

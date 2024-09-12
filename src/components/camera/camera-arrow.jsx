import React from "react";
import { useNavigate } from "react-router-dom";

const CameraArrow = () => {
    const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate(-1)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.7273 3.687C12.8176 3.59153 12.8881 3.47923 12.9349 3.3565C12.9817 3.23377 13.0039 3.10302 13.0002 2.97172C12.9965 2.84042 12.9669 2.71113 12.9133 2.59125C12.8596 2.47136 12.7828 2.36322 12.6873 2.273C12.5919 2.18279 12.4796 2.11226 12.3568 2.06544C12.2341 2.01863 12.1034 1.99644 11.9721 2.00016C11.8408 2.00387 11.7115 2.03341 11.5916 2.08709C11.4717 2.14077 11.3636 2.21753 11.2733 2.313L2.77334 11.313C2.59781 11.4987 2.5 11.7445 2.5 12C2.5 12.2555 2.59781 12.5013 2.77334 12.687L11.2733 21.688C11.363 21.7856 11.4711 21.8643 11.5914 21.9198C11.7117 21.9752 11.8419 22.0062 11.9743 22.0109C12.1067 22.0156 12.2387 21.9939 12.3626 21.9472C12.4866 21.9004 12.6 21.8295 12.6963 21.7386C12.7927 21.6476 12.8699 21.5384 12.9237 21.4173C12.9775 21.2963 13.0067 21.1657 13.0095 21.0333C13.0124 20.9008 12.989 20.7691 12.9405 20.6458C12.8921 20.5225 12.8196 20.4101 12.7273 20.315L4.87534 12L12.7273 3.687Z"
        fill="white"
      />
    </svg>
  );
};

export default CameraArrow;
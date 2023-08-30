import React from "react";
import "./CopyIcon.css";
import { FaCopy } from "react-icons/fa6";

function CopyIcon() {
  // const copyIcon = (
  //   <svg
  //     fill="#a4ffaf"
  //     viewBox="0 0 16 16"
  //     xmlns="http://www.w3.org/2000/svg"
  //     transform="matrix(1, 0, 0, 1, 0, 0)"
  //   >
  //     <g
  //       id="SVGRepo_bgCarrier"
  //       strokeWidth="0"
  //     ></g>
  //     <g
  //       id="SVGRepo_tracerCarrier"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     ></g>
  //     <g id="SVGRepo_iconCarrier">
  //       <path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z"></path>
  //       <path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z"></path>
  //     </g>
  //   </svg>
  // );
  return (
    <div>
      <FaCopy className="CopyIcon" />
    </div>
  );
}

export default CopyIcon;
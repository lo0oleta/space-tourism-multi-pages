import * as React from "react";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";

function Logo(props: HTMLChakraProps<"svg">) {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={45} cy={45} r={45} fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </chakra.svg>
  );
}

export default Logo;

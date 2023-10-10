import { Montserrat } from "next/font/google";

export const Mont = Montserrat( {
  subsets: [ "cyrillic" ],
  display: "swap",
  style: [ "normal" ],
  fallback: [ "system-ui", "arial" ]
} );
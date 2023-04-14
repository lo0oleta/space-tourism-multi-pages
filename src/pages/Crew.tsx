import Navbar from "@/components/Navbar";
import {
  Grid,
  Box,
  Heading,
  Button,
  Text,
  Container,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Crewbg = "/assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  return (
    <>
      <Box bgImage={Crewbg} height={"100vh"} width={"200vh"} bgSize ={"cover"}>
      <Navbar />

      </Box>
    </>
  );
}

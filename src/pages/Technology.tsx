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
  
  const Technologybg = "/assets/technology/background-technology-desktop.jpg";
  
  export default function Technology() {
    return (
          <>
          <Box bgImage={Technologybg}  height={"100vh"} width={"200vh"} bgSize ={"cover"}>
          <Navbar />

        </Box></>
    
    );
  }
  
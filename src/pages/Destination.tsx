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
  
  const Destinationbg = "/assets/destination/background-destination-desktop.jpg";
  
  export default function Destination() {
    return (
          <>
          <Box bgImage={Destinationbg}  height={"100vh"} width={"200vh"} bgSize ={"cover"}>
          <Navbar />

        </Box></>
    
    );
  }
  
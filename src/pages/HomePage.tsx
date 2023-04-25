import Head from "next/head";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  VStack,
  HStack,
  Image,
  Center,
  Square,
  Link,
  Spacer,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

const Homebg = "./images/background-home-desktop.jpg";

export default function Landing() {
  return (
    <>
      <Box>
        <Box bgImage={Homebg} bgPosition="center" bgSize="cover" h="770px">
          <Navbar />

          <Box maxW="800px" mx="auto" pt={20} ml="32%">
            <Heading
              as="h1"
              size="2xl"
              color="white"
              fontFamily={"var(--font-fraunces)"}
            >
              WE ARE CREATIVES
            </Heading>
            <Image
              mt={"2vh"}
              marginStart={"30%"}
              src="images/icon-arrow-down.svg"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

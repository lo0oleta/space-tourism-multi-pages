import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Box, chakra } from "@chakra-ui/react";
import HomePage from "./HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <chakra.main>
      <HomePage />
    </chakra.main>
  );
}

// index.js
import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash" // Optional
import { Flex, Box, Image } from "@chakra-ui/core"
import Header from "../components/header"
import "../styles/index.css"
import { Link } from "gatsby"
import Menu from "./menu"
import ham from "../images/smokedham1.jpg"
import combo from "../images/combo2.png"
import logo from "../images/frisco-logo2.png"
import roast from "../images/cajunroastbeef.jpg"

// Index Page Component
const IndexPage = ({ data }) => {
  const nodes = get(data, "allGoogleSheetSheetRow.nodes", [])
  return (
    <div>
      <Flex className="navbar"></Flex>
      <Flex>
        <div class="logo-div">
          <Image className="logo" src={logo} />
        </div>
      </Flex>
      <hr></hr>
      <Flex flexDir="row" justifyContent="center">
        <div class="color-box"></div>
        <Image className="header-image" src={roast} />
        <Image className="header-image" src={ham} />
        <div class="color-box"></div>
      </Flex>
      <hr></hr>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Flex className="contact">
          <a href="https://goo.gl/maps/PwJFVxKPM9yhQdAfA">
            1227 Phillips Ln, Pearl, MS 39208
          </a>
        </Flex>
        <Flex className="contact">
          <Box display={["none", "none", "block", "block"]}>
            &nbsp;&bull;&nbsp;
          </Box>
          (601) 932-6301
        </Flex>
      </Flex>

      <hr></hr>
      <Flex justifyContent="center" alignItems="center">
        <Link className="menu" to="/menu">
          MENU
        </Link>
      </Flex>
      <hr></hr>
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <Flex className="hours-header">Hours</Flex>
        <Flex flexDir="column" justifyContent="center" alignItems="flex-end">
          <Flex className="hours">Mon-Thu: 10:30am - 8:00pm</Flex>
          <Flex className="hours">Friday: 10:30am - 8:30pm</Flex>
          <Flex className="hours">Saturday: 10:30am - 7:30pm</Flex>
        </Flex>
      </Flex>
      <Flex className="description" fontSize={["20px", "24px", "24px", "24px"]}>
        We are a small, family owned restaurant that started out in malls in
        1984 and moved to Pearl in 1993. Many refer to us as a 'mom and pop
        store' while others refer to us as 'that secret hole in the wall.' We
        have something for everyone, from giant sandwiches to our award winning
        rib plates. Our catfish is seasoned with our own original recipe, and
        our chicken tenders go great with our secret honey mustard recipe made
        with local honey. We're a family-friendly restaurant at an affordable
        price, and we hope to see you soon!
      </Flex>
      <hr></hr>
      <Flex className="combo">
        <Image src={combo} />
      </Flex>
    </div>
  )
}

export default IndexPage

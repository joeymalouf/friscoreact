// index.js
import React from "react"
import { get } from "lodash" // Optional
import { Flex, Box, Image } from "@chakra-ui/core"
import "../styles/index.css"
import { Link } from "gatsby"
import ham from "../images/smokedham1.jpg"
import logo from "../images/frisco-logo2.png"
import roast from "../images/cajunroastbeef.jpg"
import reuben from "../images/reuben.jpg"
import muffaletta from "../images/muff.jpg"
import turkey from "../images/smoked turkey1.jpg"
import Footer from "../components/footer"
import navbar from "../images/navbar.png"

// Index Page Component
const IndexPage = ({ data }) => {
  const nodes = get(data, "allGoogleSheetSheetRow.nodes", [])
  return (
    <Box height="100%">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Box marginBottom="-50px" minHeight="100%">
        <Flex
          backgroundColor="rgb(134, 54, 41)"
          backgroundImage={`url(${navbar})`}
          backgroundRepeat="repeat-x"
          backgroundSize="auto 200px"
          minHeight="85px"
          alignItems="center"
          paddingTop="33px"
          width="100%"
        ></Flex>
        <Flex>
          <Box
            position="absolute"
            top={["20px", "30px", "30px", "40px"]}
            left="50%"
            marginLeft={["-87px", "-125px", "-130px", "-140px"]}
          >
            <Image
              width={["174px", "250px", "260px", "280px"]}
              overflow="hidden"
              src={logo}
            />
          </Box>
        </Flex>
        <hr></hr>
        <Flex flexDir="row" justifyContent="center">
          <Flex backgroundColor="rgb(134, 54, 41)" flexGrow="2"></Flex>
          <Flex
            width={["44%", "40%", "40%", "30%"]}
            marginRight="2.5px"
            marginLeft="5px"
          >
            <Image
              alignSelf="flex-start"
              height="auto"
              w="100%"
              src={roast}
            />
          </Flex>
          <Flex
            width={["44%", "40%", "40%", "30%"]}
            marginRight="5px"
            marginLeft="2.5px"
          >
            <Image alignSelf="flex-start" height="auto" w="100%" src={ham} />
          </Flex>

          <Flex backgroundColor="rgb(134, 54, 41)" flexGrow="2"></Flex>
        </Flex>
        <hr></hr>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          justifyContent="center"
          alignItems="center"
        >
          <Flex>
            <Link
              className="location"
              to="https://goo.gl/maps/PwJFVxKPM9yhQdAfA"
            >
              1227 Phillips Ln, Pearl, MS 39208
            </Link>
          </Flex>
          <Flex className="telephone">
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
        <Flex
          className="description"
          fontSize={["20px", "24px", "24px", "24px"]}
        >
          We are a small, family owned restaurant that started out in malls in
          1984 and moved to Pearl in 1993. Many refer to us as a 'mom and pop
          store' while others refer to us as 'that secret hole in the wall.' We
          have something for everyone, from giant sandwiches to our award
          winning rib plates. Our catfish is seasoned with our own original
          recipe, and our chicken tenders go great with our secret honey mustard
          recipe made with local honey. We're a family-friendly restaurant at an
          affordable price, and we hope to see you soon!
        </Flex>
        <hr></hr>
        <Flex
          width="100%"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Flex width={["100%", "33.33%", "33.33%", "33.33%"]}>
            <Flex padding="5px">
              <Image
                width="100%"
                alignSelf="flex-start"
                justifySelf="flex-start"
                height="auto"
                src={reuben}
              />
            </Flex>
          </Flex>
          <Flex width={["100%", "33.33%", "33.33%", "33.33%"]}>
            <Flex padding="5px">
              <Image
                width="100%"
                alignSelf="flex-start"
                justifySelf="flex-start"
                height="auto"
                src={muffaletta}
              />
            </Flex>
          </Flex>
          <Flex width={["100%", "33.33%", "33.33%", "33.33%"]}>
            <Flex padding="5px">
              <Image
                width="100%"
                alignSelf="flex-start"
                justifySelf="flex-start"
                height="auto"
                src={turkey}
              />
            </Flex>
          </Flex>
        </Flex>
        <hr></hr>
        <Box height="50px"></Box>
      </Box>
      <Footer></Footer>
    </Box>
  )
}

export default IndexPage

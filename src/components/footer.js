import React from "react"
import { Link } from "gatsby"
import { Flex } from "@chakra-ui/core"

const Footer = () => {
  return (
    <Flex
      as="nav"
      padding="1.5rem"
      backgroundColor="#303030"
      color="#FAFAFA"
      height="50px"
      justifyContent="center"
      alignItems="center"
      fontFamily="Trebuchet MS"
    >
      <Flex width={["100%", "100%", "50%", "50%"]}>
        <Flex flexGrow="1" justifyContent="center" alignItems="center">
          <Link
            className="footerLink"
            to="https://www.tripadvisor.com/Restaurant_Review-g43944-d419503-Reviews-Frisco_Deli-Pearl_Mississippi.html"
          >
            Trip Advisor
          </Link>
        </Flex>
        <Flex flexGrow="1" justifyContent="center" alignItems="center">
          <Link
            className="footerLink"
            to="https://www.facebook.com/Frisco-Deli-116420491719744/"
          >
            Facebook
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer

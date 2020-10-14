import React from "react"
import { Flex, Image } from "@chakra-ui/core"
import "../styles/header.css"
import "../styles/index.css"
import logo from "../images/frisco-text-logo.png"
import { Link } from "gatsby"


const Header = () => {
  return (
    <div>
      <Flex className="navbar" justifyContent="center" alignItems="flex-end">
        <Link to="/"><Image paddingBottom="5px" width={["240px","300px","300px","300px"]} src={logo} /></Link>
        
      </Flex>
    </div>
  )
}

export default Header

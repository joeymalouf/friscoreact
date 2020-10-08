import React from "react"
import { Flex, Text, Select } from "@chakra-ui/core"
import "../styles/header.css"

const Category = ({category}) => {
    console.log("cat" + category)
  return (
    <div>
        test
      {category.categoryname} 
      {category.foods}
    </div>
  )
}

export default Category

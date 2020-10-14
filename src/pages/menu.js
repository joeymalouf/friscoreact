// index.js
import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash" // Optional
import { Flex, Box } from "@chakra-ui/core"
import "../styles/index.css"
import Category from "../components/category"
import Header from "../components/header"
import Footer from "../components/footer"

// Index Page Component
const MenuPage = ({ data }) => {
  const foods = get(data, "query1.foods", [])
  const categoryNames = get(data, "query2.categories", [])
  categoryNames.forEach(category => {
    category.foods = []
    foods.forEach(food => {
      if (food.foodcategory == category.categoryname) {
        category.foods.push(food)
      }
    })
  })
  console.log(categoryNames)
  // var johns = group.map(group, function(o) {
  //   if (o.foodcategory == "Plates") return o;
  // });
  // console.log(johns)
  return (
    <Box className="body" bg="darkShade">
      <Box className="indexFrame" bg="darkShade">
        <Header></Header>
        <hr></hr>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {categoryNames.map(category => (
            <Category key={category.categoryname} category={category} />
          ))}
        </Flex>
        <hr></hr>
        <Box className="push"></Box>
      </Box>
      <Footer></Footer>
    </Box>
  )
}
export default MenuPage

// GraphQL query to our spreadsheet
export const categories = graphql`
  query MyQuery {
    query1: allGoogleSheetSheetRow {
      foods: nodes {
        foodprice
        foodname
        fooddescription
        foodcategory
      }
    }
    query2: allGoogleSheetSheetRow(
      sort: { fields: categoryorder }
      filter: { categoryname: { ne: null } }
    ) {
      categories: nodes {
        categoryname
        categorydescription
        categoryorder
      }
    }
  }
`

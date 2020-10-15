// index.js
import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash" // Optional
import { Flex, Box, Icon } from "@chakra-ui/core"
import "../styles/index.css"
import Category from "../components/category"
import Header from "../components/header"
import Footer from "../components/footer"
import favicon from "../images/FriscoIconLetter.png"
import { Helmet } from "react-helmet"

// Index Page Component
const MenuPage = ({ data }) => {
  const foods = get(data, "query1.foods", [])
  const categoryNames = get(data, "query2.categories", [])
  categoryNames.forEach(category => {
    category.foods = []
    foods.forEach(food => {
      if (food.foodcategory === category.categoryname) {
        category.foods.push(food)
      }
    })
  })
  console.log(categoryNames)

  return (
    <Box className="body" bg="darkShade">
      <Helmet>
        <html lang="en" />
        <title>Frisco Deli</title>
        <meta
          name="description"
          content="Frisco Deli is a deli and fried food restaurant in Pearl, Mississippi"
        ></meta>

        <link rel="icon" href={favicon} />
      </Helmet>
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
        foodimage
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

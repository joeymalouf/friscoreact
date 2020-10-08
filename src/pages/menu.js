// index.js
import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash" // Optional
import { Flex, Box } from "@chakra-ui/core"
import Header from "../components/header"
import "../styles/index.css"
import { Link } from "gatsby"
import Category from "../components/category"

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
    <div>
      {categoryNames.map(category => (
        <Category
          category={category.categoryname}
          key={category.categoryname}
        ></Category>
      ))}
    </div>
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

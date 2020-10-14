import React from "react"
import { Flex, Box, Text } from "@chakra-ui/core"
import "../styles/header.css"

const Category = ({ category }) => {
  console.log("cat" + category)
  return (
    <Flex
      width="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize="36px"
        fontFamily="Trebuchet MS"
        margin="0px"
        width="100%"
        textAlign="center"
        color="#FAFAFA"
        bg="rgb(134, 54, 41)"
      >
        {category.categoryname}
      </Text>
      {category.categorydescription != null && (
        <div>
          <Text
            fontSize="18px"
            fontFamily="Trebuchet MS"
            padding="20px"
            margin="0px"
            textAlign="center"
          >
            {category.categorydescription}
          </Text>
          <hr></hr>
        </div>
      )}

      <Flex flexDir="row" flexWrap="wrap" width="100%">
        {category.foods.map(food => (
          <Flex
            width={["100%", "50%", "50%", "33%"]}
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              flexDir="row"
              width="100%"
              padding="20px"
              flexWrap="wrap"
              fontFamily="Trebuchet MS"
              fontSize="20px"
            >
              <Flex width="100%" fontSize="24px" marginBottom="5px" alignItems="flex-start">
                <Flex textAlign="left">{food.foodname}</Flex>
                <Flex flexGrow="1" borderBottom="dotted 4px" marginLeft="3px" marginRight="3px" height="72%"></Flex>
                <Flex textAlign="right" verticalAlign="bottom" height="100%">{food.foodprice}</Flex>
                {/* {food.foodcategory = null && (
                  <Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                  </Flex>
                )} */}
              </Flex>

              <Box width="100%" textAlign="left">
                {food.fooddescription}
              </Box>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default Category

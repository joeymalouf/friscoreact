import React from "react"
import {
  Flex,
  Box,
  Text,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/core"
import camera from "../images/camera.svg"

const Category = ({ category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <Flex
      width="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        fontSize="36px"
        fontFamily="Trebuchet MS"
        margin="0px"
        width="100%"
        textAlign="center"
        color="#FAFAFA"
        bg="rgb(134, 54, 41)"
        fontWeight="530"
      >
        {category.categoryname}
      </Heading>
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
            width={["100%", "50%", "50%", "33.33%"]}
            justifyContent="center"
            alignItems="flex-start"
            key={food.foodname}
          >
            <Flex
              flexDir="row"
              width="100%"
              paddingLeft="15px"
              paddingRight="15px"
              paddingBottom="15px"
              paddingTop="15px"
              flexWrap="wrap"
              fontFamily="Trebuchet MS"
              fontSize="18px"
            >
              {food.foodprice != null && (
                <Flex
                  width="100%"
                  fontSize="20px"
                  marginBottom="5px"
                  alignItems="flex-start"
                  flexDir="column"
                >
                  <Flex w="100%">
                    <Flex flexGrow="2" textAlign="left">
                      {food.foodname}
                    </Flex>
                    {food.foodimage != null && (
                      <Flex>
                        <Box onClick={onOpen}>
                          <Image h="1em" src={camera}></Image>
                        </Box>
                        <Modal
                          isOpen={isOpen}
                          onClose={onClose}
                          isCentered
                          size={["xs", "sm", "md", "lg"]}
                          initialFocusRef={initialRef}
                          finalFocusRef={finalRef}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalBody padding="5px">
                              <Image
                                width="100%"
                                alignSelf="flex-start"
                                justifySelf="flex-start"
                                height="auto"
                                src={require(`../images/${food.foodimage}`)}
                              />
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      </Flex>
                    )}
                  </Flex>

                  <Flex w="100%">
                    <Flex
                      flexGrow="1"
                      borderBottom="dotted 4px #777777"
                      marginRight="3px"
                      height="68%"
                    ></Flex>
                    <Flex
                      textAlign="right"
                      verticalAlign="bottom"
                      height="100%"
                    >
                      {food.foodprice}
                    </Flex>
                  </Flex>
                </Flex>
              )}
              {food.foodprice === null && (
                <Flex
                  width="100%"
                  fontSize="20px"
                  marginBottom="5px"
                  alignItems="flex-start"
                  textAlign="left"
                >
                  {food.foodname}
                </Flex>
              )}

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

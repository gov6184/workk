import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Button,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  

  

  
  function ProductAddToCart({elem}) {
    let [qty,setqty]=useState(1)
    let val=JSON.parse(localStorage.getItem("productId"))
    console.log(val)
    let funn=async()=>{
        await axios.post("http://localhost:8080/product/add",{"productId":elem.id,"QTY":qty,"UserId":val})
    }
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
            height={"400px"}
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
          width={"100%"}
          height={"50%"}
            src={elem.images[0]}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                {elem.title}
                </Badge>
              )}
            </Box>
            <Flex width={'200px'} mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="sm"
                fontWeight="semibold"
                
            
                >
                {elem.description}
              </Box>

            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                
                {elem.price}
              </Box>
              <Flex>
                <Button onClick={()=>{setqty(qty+1)}} width={"20px"} height={"20px"}>+</Button>{qty}<Button onClick={()=>{if(setqty>0){setqty(qty-1)}}} width={"20px"} height={"20px"}>-</Button>
              </Flex>
              <chakra.a href={'#'} display={'flex'}>
                  <Icon
                  onClick={funn}
                  
                  as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductAddToCart;
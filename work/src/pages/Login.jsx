import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  export default function Login() {
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let navigate=useNavigate()
    let funn=async()=>{
        if(email=="" || password==""){
            alert("please enter all fields")
            return
        }else{
            let obj={
                email,
                password
            }
            console.log(obj)
            await axios.post("http://localhost:8080/users/check",{email,password}).then(res=>{
                console.log(res)
                if(res.data=="user not found"){
                    alert("Please register")
                    navigate("/register")
                    return
                }
                if(res.data.status=="authenticated successfully"){
                    console.log(res.data.value)
                    localStorage.setItem("productId",JSON.stringify(res.data.value["_id"]))
                    navigate("/Home")
                }else{
                    alert("authentication failed")
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>setemail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>setpassword(e.target.value)} type="password" />
              </FormControl>
              <Stack spacing={10}>
              
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  
                  onClick={funn}
                  >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
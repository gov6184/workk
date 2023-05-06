import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    let navigate=useNavigate()
    let [username,setusername]=useState("")
    let[lastname,setlastname]=useState("")
    let[email,setemail]=useState("")
    let [contact,setcontact]=useState("")
    let [password,setpassword]=useState("")
    let funn=async()=>{
        if(username=="" || lastname=="" || email=="" || contact=="" || contact==""|| password==""){
            alert("please provide all fields")
        }else{
            let obj={
                "userName":username,
    "lastName":lastname,
    "email":email,
    "Contact":contact,
    "Password":password
            }
            console.log(obj)
            await axios.post("http://localhost:8080/users/post",{
                "userName":username,
    "lastName":lastname,
    "email":email,
    "Contact":contact,
    "Password":password
            }).then((res)=>{
                console.log(res)
                    if(res.data=="authenticated successfully"){
                        
                        navigate("/Login")
                    }
                    if(res.data=='user present'){
                        alert("user present")
                        navigate("/Login")
                    }
            }).catch((err)=>{
                console.log("err",err)
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Register
            </Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input onChange={(e)=>setusername(e.target.value)} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input onChange={(e)=>setlastname(e.target.value)} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>setemail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="contact" isRequired>
                <FormLabel>Contact</FormLabel>
                <Input onChange={(e)=>setcontact(e.target.value)} type="number" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel> 
                <InputGroup>
                  <Input onChange={(e)=>setpassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                      
                      >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={funn}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
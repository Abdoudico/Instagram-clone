import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthForm = () => {

    const navigate = useNavigate();
    const [isLogin, setIslogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const HandleAuth = () => {
        if(!inputs.email || !inputs.password) {
            alert("Please fill the missing fields")
            return
        }

        navigate("/");
    };

  return (
        <>
        <Box border={"1px solid red"} borderRadius={6} padding={6}>
            <VStack spacing={4}>
                <Image src="/logov1.png" h={12} margin={2} cursor={"pointer"} alt="uwugram logo" />

                <Input placeholder="email" size={"md"} fontSize={14} 
                value={inputs.email}
                onChange={(e) => setInputs({...inputs,email:e.target.value})}
                />

                <Input placeholder="password" size={"md"} fontSize={14} type="password" 
                value={inputs.password}
                onChange={(e) => setInputs({...inputs,password:e.target.value})}
                />

                {!isLogin ? (
                <Input placeholder="confirm password" size={"md"} fontSize={14} type="password" 
                value= {inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}      
                />   
                ) : null}

                <Button w={"full"} colorScheme="red" fontSize={14} onClick={HandleAuth}>
                    {isLogin ? "Login" : "SignUp"}
                </Button>

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={3} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"red"}/>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"red"}/>
                </Flex>

                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src="/google.png" w={6} alt="google login/signup"/>
                    <Text mx={2} color={"blue.500"}>Login with Google</Text>
                </Flex>
            </VStack>
        </Box>


        <Box border={"1px solid red"} borderRadius={6} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Dont' Have an Account ?" : "Already Have an Account ?"}
                    </Box>
                    <Box onClick={() => setIslogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                        {!isLogin ? "Login" : "SignUp"}
                    </Box>
                </Flex>
        </Box>
        </>
  )
}

export default AuthForm
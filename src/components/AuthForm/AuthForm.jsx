import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {

    const [isLogin, setIslogin] = useState(true);
    const [Inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

/*     const HandleAuth = () => {

    }
 */
  return (<>
        <Box border={"1px solid red"} borderRadius={6} padding={6}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="uwugram logo" />
                <Input placeholder="username or email" size={"md"} fontSize={14} />
                <Input placeholder="password" size={"md"} fontSize={14} type="password" />

                {!isLogin ? (
                <Input placeholder="confirm password" size={"md"} fontSize={14} type="password"/>                    
                ) : null}

                <Button w={"full"} colorScheme="red" fontSize={14} onClick={""}>
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
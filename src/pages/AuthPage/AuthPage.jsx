import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>

            <Flex justifyContent={"center"} alignItems={"center"} gap={6}>

                <Box display={{base: "none", md:"block"}}>
                    <Image src="/auth.png" h={650} alt="auth phone img"/>
                </Box>

                <VStack spacing={4} align={"stretch"}>
                    <AuthForm />
                    <Box textAlign={"Center"}>Get The App</Box>
                    <Flex gap={4} justifyContent={"Center"}>
                        <Image src="/playstore.png" h={10} alt="scamstore store" cursor={"pointer"}/>
                        <Image src="/microsoft.png" h={10} alt="micropipi store" cursor={"pointer"}/>
                    </Flex>
                </VStack>

            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
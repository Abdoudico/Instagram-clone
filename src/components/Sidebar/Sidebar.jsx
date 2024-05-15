import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
import { CreatePostLogo, LogoV1, LogoV1MobileLogo, NotificationsLogo, SearchLogo } from "../assets/constants"
import { AiFillHome } from "react-icons/ai"

const Sidebar = () => {

    const sidebarItems = [
        {
           icon: <AiFillHome size={25} color="red" />,
           text: "Home",
           link: "/",
        },
        {
           icon: <SearchLogo />,
           text: "Search",
        },
        {
           icon: <NotificationsLogo />,
           text: "Notifications",
        },
        {
           icon: <CreatePostLogo />,
           text: "Create",

        },
        {
           icon: <Avatar size={"sm"} name="uwu master" src="/profilepic.png" />,
           text: "Profile",
           link: "/uwumaster",
        },
    ];

  return (
        <Box h={"100vh"}  borderRight={"1px solid"} borderColor={"red"} py={8} position={"sticky"} top={0} left={0} px={{base:2, md:4}}>
            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>

                <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor={"pointer"}>
                    <LogoV1 />
                </Link>
                <Link to={"/"} as={RouterLink} p={1} display={{base:"block", md:"none"}} cursor={"pointer"} borderRadius={6} _hover={{bg:"red"}}
                >
                    <LogoV1MobileLogo />
                </Link>

                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {sidebarItems.map((item, index) => (
                        <Tooltip key={index} hasArrow label={item.text} placement="right" ml={1} openDelay={550} display={{base:"block", md:"none"}}>
                            <Link display={"flex"} to={item.link || null} as={RouterLink} alignItems={"center"} gap={4} _hover={{bg:"grey"}} borderRadius={6} p={2} w={{base:"10", md:"full"}} justifyContent={{base:"center", md:"flex-start"}}>
                                {item.icon}
                                <Box display={{base:"none", md:"block"}}>
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
            </Flex>
        </Box>
  )
}

export default Sidebar
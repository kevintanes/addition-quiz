import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, ListItem, OrderedList } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetchScore } from "../hooks/useFetchScore";

function LandingPage() {
    const navigate = useNavigate();
    const { topScore } = useFetchScore();

    return (
        <Flex justifyContent={"center"} pos="relative" top="80">
            <Card align={"center"} w="540px" shadow={"2xl"} >
                <CardHeader>
                    <Heading size='lg'>Top Score</Heading>
                </CardHeader>
                <CardBody fontSize={"lg"}>
                    <OrderedList fontSize={"xl"} fontWeight="semibold">
                        <ListItem>{topScore[0] ? topScore[0] : ('-')}</ListItem>
                        <ListItem>{topScore[1] ? topScore[1] : ('-')}</ListItem>
                        <ListItem>{topScore[2] ? topScore[2] : ('-')}</ListItem>
                        <ListItem>{topScore[3] ? topScore[3] : ('-')}</ListItem>
                        <ListItem>{topScore[4] ? topScore[4] : ('-')}</ListItem>
                    </OrderedList>
                </CardBody>
                <CardFooter>
                    <Button
                        onClick={() => navigate("/play")}
                        colorScheme='blue'
                    >
                        Play
                    </Button>
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default LandingPage
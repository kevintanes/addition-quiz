import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DB_URL } from '../Helper';
import { useFetchScore } from "../hooks/useFetchScore";


function LandingPage() {
    const navigate = useNavigate();
    const { topScore } = useFetchScore();

    const printTopScore = () => {
        return topScore.map((val) => {
            return (
                <ListItem>{val.score}</ListItem>
            )
        })
    }

    return (
        <Flex justifyContent={"center"} pos="relative" top="80">
            <Card align={"center"} w="540px">
                <CardHeader>
                    <Heading size='lg'>Top Score</Heading>
                </CardHeader>
                <CardBody fontSize={"lg"}>
                    <OrderedList>
                        {printTopScore()}
                    </OrderedList>
                </CardBody>
                <CardFooter>
                    <Button onClick={() => navigate("/play")} colorScheme='blue'>Play</Button>
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default LandingPage
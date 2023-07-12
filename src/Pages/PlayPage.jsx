import React from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { DB_URL } from '../Helper';
import axios from 'axios';
import { useAddScore } from "../hooks/useAddScore";

function PlayPage() {
    const { addScore } = useAddScore();
    
    const [count, setCount] = React.useState(1);
    const [score, setScore] = React.useState(0);
    const [question, setQuestion] = React.useState([]);
    const [answer, setAnswer] = React.useState("");
    const modalScore = useDisclosure();
    const navigate = useNavigate();

    const newQuestion = () => {
        const question1 = Math.floor(Math.random() * 10);
        const question2 = Math.floor(Math.random() * 10);
        setQuestion([question1, question2])
    };

    React.useEffect(() => {
        newQuestion()
    }, [])

    const btnSubmit = () => {
        const response = question[0] + question[1]

        if (response === Number(answer)) {
            setScore(score + 1);
        }
        setCount(count + 1);
        newQuestion();
        setAnswer("");
    };



    React.useEffect(() => {
        if (count === 11) {
            modalScore.onOpen();
            addScore()
        }
    }, [count])

    const btnExit = () => {
        setScore();
        setCount();
        setAnswer("");
        modalScore.onClose();
        navigate("/")
    }

    const btnRetry = () => {
        setScore(0);
        setCount(1);
        setAnswer("");
        modalScore.onClose();
    }


    return (
        <Flex justifyContent={"center"} pos="relative" top="80">
            <Card textAlign={"center"} w="540px">
                <CardHeader>
                    <Heading size='lg'>Question {count}/10 </Heading>
                </CardHeader>
                <CardBody fontSize={"2xl"} fontWeight="bold">
                    <Flex justifyContent={"center"}>
                        {question.join(" + ")} =
                        <Input
                            maxLength={2}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            textAlign={"center"}
                            w={"64px"}
                            fontSize="2xl"
                            fontWeight={"bold"}
                            ml="8px"
                        />
                    </Flex>
                </CardBody>
                <CardFooter>
                    <Button mx="auto" colorScheme='blue' onClick={btnSubmit}>Submit</Button>
                </CardFooter>
                <Text fontSize={"lg"} fontWeight="bold" align={"right"} mr="20px">
                    Score: {score}
                </Text>
            </Card>

            <Modal isOpen={modalScore.isOpen} onClose={modalScore.onClose} isCentered>
                <ModalOverlay />
                <ModalContent alignItems={"center"}>
                    <ModalHeader fontSize={"2xl"}>Final Score: {score}</ModalHeader>
                    <ModalBody fontSize={"3xl"} fontWeight={"bold"}>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={btnRetry}>
                            Retry
                        </Button>
                        <Button colorScheme={"red"} onClick={btnExit}>Exit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default PlayPage
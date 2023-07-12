import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, Text, useDisclosure } from '@chakra-ui/react';
import { useAddScore } from "../hooks/useAddScore";
import ModalResult from '../Components/ModalResult';

function PlayPage() {
    const { addScore, setScore, score } = useAddScore();
    const [count, setCount] = React.useState(1);
    const [question, setQuestion] = React.useState([]);
    const [answer, setAnswer] = React.useState("");

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

    return (
        <Flex justifyContent={"center"} pos="relative" top="80">
            <Card textAlign={"center"} w="540px" shadow={"2xl"}>
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
            <ModalResult
                setCount={setCount}
                count={count}
                setAnswer={setAnswer}
                setScore={setScore}
                score={score}
                addScore={addScore}
            />
        </Flex>
    )
}

export default PlayPage
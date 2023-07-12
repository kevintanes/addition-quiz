import React from 'react';
import {
    Button,
    ListItem,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    OrderedList,
    useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useFetchScore } from '../hooks/useFetchScore';

function ModalResult(props) {

    const { topScore, getTopScore } = useFetchScore();
    const navigate = useNavigate();
    const modalScore = useDisclosure();

    const btnExit = () => {
        props.setScore();
        props.setCount();
        props.setAnswer("");
        modalScore.onClose();
        navigate("/")
    }

    const btnRetry = () => {
        props.setScore(0);
        props.setCount(1);
        props.setAnswer("");
        modalScore.onClose();
    }

    React.useEffect(() => {
        if (props.count === 11) {
            props.addScore();
            getTopScore()
            modalScore.onOpen();
        }
    }, [props.count])

    return (
        <Modal isOpen={modalScore.isOpen} onClose={modalScore.onClose} isCentered>
            <ModalOverlay />
            <ModalContent alignItems={"center"}>
                <ModalHeader fontSize={"2xl"}>Final Score: {props.score}</ModalHeader>
                <ModalBody>
                    <OrderedList fontSize={"xl"} fontWeight="semibold">
                        <ListItem>{topScore[0] ? topScore[0] : ('-')}</ListItem>
                        <ListItem>{topScore[1] ? topScore[1] : ('-')}</ListItem>
                        <ListItem>{topScore[2] ? topScore[2] : ('-')}</ListItem>
                        <ListItem>{topScore[3] ? topScore[3] : ('-')}</ListItem>
                        <ListItem>{topScore[4] ? topScore[4] : ('-')}</ListItem>
                    </OrderedList>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={btnRetry}>
                        Retry
                    </Button>
                    <Button colorScheme={"red"} onClick={btnExit}>Exit</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalResult
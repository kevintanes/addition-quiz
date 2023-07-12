import './App.css';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import PlayPage from './Pages/PlayPage';

function App() {
  return (
    <Box bgColor={"red.400"} w="full" h="100vh">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/play' element={<PlayPage />} />
      </Routes>
    </Box>
  );
}

export default App;

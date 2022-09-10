import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ColorProvider from '../hooks/color-hooks';
import AddColorForm from './AddColorForm'
import ColorDetails from './ColorDetails';
import ColorList from './ColorList';

const App = () => {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} /> 
        <Route path=":id" element={<ColorDetails/>} />
      </Routes>
    </ColorProvider>
  );
};

export default App;
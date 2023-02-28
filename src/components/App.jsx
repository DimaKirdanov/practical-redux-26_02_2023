import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import { HomePage } from 'pages/HomePage/HomePage';
import { AddUserPage } from 'pages/AddUserPage/AddUserPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};

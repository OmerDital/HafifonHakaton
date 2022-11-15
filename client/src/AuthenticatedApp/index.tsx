import { Route, Routes } from 'react-router-dom';
import ManageEntities from './ManageEntities';
import ManageAlbums from './ManageEntities/ManageAlbums';
import Shell from './Shell';
import NotFound from '../components/NotFound';

const ShellRoutes = () => (
  <Routes>
    <Route path='/' element={<Shell />}>
      <Route index element={<ManageEntities />} />
      <Route path='my-training' element={<ManageEntities />} />
      <Route path='score-board' element={<ManageAlbums />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default ShellRoutes;
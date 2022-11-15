import { Route, Routes } from 'react-router-dom';
import MyTraining from './MyTraining';
import ManageAlbums from './MyTraining/ManageAlbums';
import Shell from './Shell';
import NotFound from '../components/NotFound';
import SectionPage from './MyTraining/SectionPage';

const ShellRoutes = () => (
  <Routes>
    <Route path='/' element={<Shell />}>
      <Route index element={<MyTraining />} />
      <Route path='my-training' element={<MyTraining />}>
        <Route path=':id' element={<SectionPage />} />
      </Route>
      <Route path='score-board' element={<ManageAlbums />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default ShellRoutes;
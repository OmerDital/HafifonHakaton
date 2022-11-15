import { Button, Stack } from '@mui/material';
import useFetch from '../../hooks/use-fetch';
import { Outlet, useNavigate } from 'react-router-dom';

interface Section {
  id: string,
  name: string
}

const MyTraining = () => {
  const [sections] = useFetch<Section[]>('sections');
  const navigate = useNavigate();

  return (
    <Stack height='100%'>
      <Stack direction='row' spacing={1}>
        {sections?.map(({ name, id }) => (
          <Button variant='outlined' onClick={() => navigate(`/my-training/${id}`)} key={id}>{name}</Button>
        ))}
      </Stack>
      <Outlet />
    </Stack>
  );
};

export default MyTraining;
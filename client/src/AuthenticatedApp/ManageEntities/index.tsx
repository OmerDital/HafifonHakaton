import { Button, Stack } from '@mui/material';

const ManageEntities = () => (
  <Stack height='100%'>
    <Stack direction='row' spacing={1}>
      <Button>חפיפה מקצועית</Button>
      <Button>חפיפה יחידתית</Button>
      <Button>חפיפה מערכית</Button>
    </Stack>
  </Stack>
);

export default ManageEntities;
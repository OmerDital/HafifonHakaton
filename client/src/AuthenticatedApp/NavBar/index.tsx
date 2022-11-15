import {
  AppBar, Grid, Stack, Toolbar, Typography
} from '@mui/material';
import NavLink from './NavLink';
import Greeting from './Greeting';
import ColorModeButton from './ColorModeButton';

interface NavBarProps {
  height: string;
}

const NavBar = ({ height }: NavBarProps) => (
  <AppBar position='relative' sx={{ height, minWidth: '620px', bgcolor: 'rgba(217, 217, 217, 1)' }}>
    <Toolbar>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid container flexWrap='nowrap' sx={{ width: 'auto' }}>
          <Grid item>
            <Typography variant='h5' marginRight='10px'>
              חפיפון |
            </Typography>
          </Grid>
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            spacing={1}
          >
            <NavLink to='/'>החפיפה שלי</NavLink>
            <NavLink to='/score-board'>לוח תוצאות</NavLink>
          </Stack>
        </Grid>
        <Grid
          container
          sx={{ width: 'auto' }}
          alignItems='baseline'
          flexWrap='nowrap'
        >
          <Greeting />
          <ColorModeButton />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;
import { ColorModeContext } from '../styles/theme';
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomListItem from './CustomListItem';
import {
  CalendarMonth,
  DarkMode,
  Dashboard,
  Mail,
  Medication,
  Notifications,
  People,
  Receipt,
  Search as SearchIcon,
} from '@mui/icons-material';
import { Avatar, Button, InputBase, PaletteMode } from '@mui/material';
import CustomIconButton from './CustomIconButton';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import LoginModal from './LoginModal';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface SidebarProps {
  mode: PaletteMode;
  setMode: (newMode: PaletteMode) => void;
}

const MainNavigation = ({ mode, setMode }: SidebarProps) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CustomIconButton
              onClick={colorMode.toggleColorMode}
              icon={<DarkMode />}
            />

            <CustomIconButton badge={4} icon={<Mail />} />

            <CustomIconButton badge={17} icon={<Notifications />} />
            <Button
              sx={{ color: 'white', background: 'grey' }}
              onClick={() => setOpenLoginModal(true)}
            >
              LOGIN
            </Button>
            <LoginModal
              open={openLoginModal}
              onClick={() => {
                setOpenLoginModal(false);
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant='permanent' open={open}>
        <DrawerHeader
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant='h6'
            noWrap
            component='div'
            padding={2}
            marginLeft={3}
          >
            DENTAL APP
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open && (
          <>
            <Avatar
              sx={{
                width: 70,
                height: 70,
                alignSelf: 'center',
                marginTop: '30px',
              }}
              src='https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
            <Typography variant='h6' textAlign={'center'}>
              Dr. Jane Smith
            </Typography>
            <Typography variant='h6' textAlign={'center'} marginBottom='10px'>
              Principal Dentist
            </Typography>
          </>
        )}
        <List>
          <Link to='/'>
            <CustomListItem
              onClick={handleDrawerClose}
              icon={<Dashboard />}
              primaryText='Dashboard'
              open
            />
          </Link>

          <Link to='dentists'>
            <CustomListItem
              onClick={handleDrawerClose}
              icon={<Medication />}
              primaryText='Dentists'
              open
            />
          </Link>

          <Link to='patients'>
            <CustomListItem
              onClick={handleDrawerClose}
              icon={<People />}
              primaryText='Patients'
              open
            />
          </Link>

          <Link to='appointments'>
            <CustomListItem
              onClick={handleDrawerClose}
              icon={<CalendarMonth />}
              primaryText='Appointments'
              open
            />
          </Link>

          <Link to='invoices'>
            <CustomListItem
              onClick={handleDrawerClose}
              icon={<Receipt />}
              primaryText='Invoices'
              open
            />
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default MainNavigation;

'use client'

import * as React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, Person2Outlined, SettingsOutlined } from '@mui/icons-material';
import type { RootState } from '@/Store/store';
import { useSelector, useDispatch } from 'react-redux';
import { darkMood } from '@/Store/Reducers/statesSlice';

const drawerWidth = 240;

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#ddd', 0.15),
    '&:hover': {
        backgroundColor: alpha('#ddd', 0.15),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
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

const Header = ({ open, handleDrawerOpen }: { open: boolean, handleDrawerOpen: () => void }) => {

    const darkMode = useSelector((state: RootState) => state.statesSlice.darkState);
    const dispatch = useDispatch()

    return (
        <AppBar position="fixed" open={open} className='app-header text-[#333] dark:text-[#ffffff99] dark:bg-secondary-dark-bg' suppressHydrationWarning> 
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                    className='dark:text-[#ffffff99] dark:hover:text-white dark:hover:bg-[#b5b5b530]'
                >
                    <MenuIcon />
                </IconButton>
                <div className='flex justify-between items-center w-full'>
                    <Search className='m-0'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <div className="btns flex items-center">

                        {!darkMode ? (
                            <IconButton color="inherit" onClick={() => dispatch(darkMood())} className='dark:hover:text-white dark:hover:bg-[#b5b5b530]'>
                                <DarkModeOutlined />
                            </IconButton>
                        ) : (
                            <IconButton color="inherit" onClick={() => dispatch(darkMood())} className='dark:hover:text-white dark:hover:bg-[#b5b5b530]'>
                                <LightModeOutlined />
                            </IconButton>
                        )}

                        <IconButton color="inherit" className='dark:hover:text-white dark:hover:bg-[#b5b5b530]'>
                            <NotificationsOutlined />
                        </IconButton>
                        <IconButton color="inherit" className='dark:hover:text-white dark:hover:bg-[#b5b5b530]'>
                            <SettingsOutlined />
                        </IconButton>
                        <IconButton color="inherit" className='dark:hover:text-white dark:hover:bg-[#b5b5b530]'>
                            <Person2Outlined />
                        </IconButton>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}


export default Header
'use client'

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BarChartOutlined, CalendarViewDayTwoTone, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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
    }),
);

const Sidebar = ({ open, handleDrawerClose }: { open: boolean, handleDrawerClose: () => void }) => {
    const theme = useTheme();
    const router = useRouter();

    const pathname = usePathname()
    const searchParams = useSearchParams()

    React.useEffect(() => {
        const url = `${pathname}?${searchParams}`
        console.log(pathname)
        // You can now use the current URL
        // ...
    }, [pathname, searchParams])

    const handleNavigation = (path: string) => {
        router.push(path);
    };


    const arr1 = [
        { text: 'Dashboard', icon: <HomeOutlined />, path: '/' },
        { text: 'Manage Team', icon: <PeopleOutline />, path: '/team' },
        { text: 'Contact Information', icon: <ContactsOutlined />, path: '/contact' },
        { text: 'Invoices Balances', icon: <ReceiptOutlined />, path: '/invoices' },
    ]
    const arr2 = [
        { text: 'Profile Form', icon: <PersonOutline />, path: '/form' },
        { text: 'Calender', icon: <CalendarViewDayTwoTone />, path: '/calender' },
        { text: 'FAQ Page', icon: <HelpOutlineOutlined />, path: '/faq' },
    ]
    const arr3 = [
        { text: 'Bar Chart', icon: <BarChartOutlined />, path: '/bar' },
        { text: 'Pie Chart', icon: <PieChartOutlineOutlined />, path: '/pie' },
        { text: 'Line Chart', icon: <TimelineOutlined />, path: '/line' },
        { text: 'Geography Chart', icon: <MapOutlined />, path: '/geography' },
    ]

    return (
        <Drawer variant="permanent" open={open} className="app-sidebar dark:border-[#3A3D4E] border-inherit dark:text-[#ffffff99] dark:bg-secondary-dark-bg">
            <DrawerHeader className='dark:text-[#ffffff99] dark:bg-secondary-dark-bg'>
                <IconButton onClick={handleDrawerClose} className='dark:text-[#ffffff99] dark:hover:text-white dark:hover:bg-[#b5b5b530]'>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <div className="avatar dark:text-[#ffffff99] dark:bg-secondary-dark-bg ele-center-col py-3">
                <Avatar alt="Cindy Baker" src="user-1.jpg" className={`${open ? 'w-[88px] h-[88px]' : 'w-[44px] h-[44px]'} text-center mb-2 border-[2px] border-[#ccc] dark:border-[#ddd]`} />
                {open && (
                    <>
                        <h1 className='font-700 text-center text-[18px] transition-all'>Cindy Baker</h1>
                        <h5 className='font-900 text-[14px] text-center text-blueTheme transition-all'>Admin</h5>
                    </>
                )}
            </div>
            <div className="main dark:text-[#ffffff99] dark:bg-secondary-dark-bg flex-1">
                <Divider className="sidebar-divider" />
                <List className=''>
                    {arr1.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }} className={`dark:text-[#ffffff99] dark:hover:text-white dark:hover:bg-[#b5b5b530] ${item.path == pathname? 'bg-[#ededed6f] dark:bg-[#ededed45] dark:text-white' : ''}`}>
                            <ListItemButton
                                onClick={() => handleNavigation(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    // bgcolor: item.path == pathname? 'gray' : 'transparent',
                                }}
                            >
                                <ListItemIcon
                                    className="sidebar-icon dark:text-[#ffffff99]"
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider className="sidebar-divider" />
                <List className=''>
                    {arr2.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }} className={`dark:text-[#ffffff99] dark:hover:text-white dark:hover:bg-[#b5b5b530] ${item.path == pathname? 'bg-[#ededed6f] dark:bg-[#ededed45] text-white' : ''}`}>
                            <ListItemButton
                                onClick={() => handleNavigation(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className="sidebar-icon dark:text-[#ffffff99]"
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider className="sidebar-divider" />
                <List className=''>
                    {arr3.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }} className={`dark:text-[#ffffff99] dark:hover:text-white dark:hover:bg-[#b5b5b530] ${item.path == pathname? 'bg-[#ededed6f] dark:bg-[#ededed45] text-white' : ''}`}>
                            <ListItemButton
                                onClick={() => handleNavigation(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className="sidebar-icon dark:text-[#ffffff99]"
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    )
}

export default Sidebar
'use client'

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Sidebar from './Sidebar';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function MyRoot({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} children={undefined} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader/>
                {children}
            </Box>
        </Box>
        </>
    );
}

// 22
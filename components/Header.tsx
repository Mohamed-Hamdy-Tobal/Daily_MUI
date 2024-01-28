
'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Avatar, IconButton, Tooltip } from '@mui/material';



function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href={`/`}>My App</Link>
                </Typography>
                <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="user.jpg" />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}
export default Header;

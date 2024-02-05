import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Title from '@/components/Title';
import { Button, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manager',
        label: 'Manager',
    },
    {
        value: 'User',
        label: 'User',
    }
];

export default function Form() {
    return (
        <div className="form main-page">
            <div className="container">
                <Title title="Form" />
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        gap: 5,
                        flexDirection: 'column',

                    }}
                    noValidate
                    autoComplete="off"
                    className="main-box"
                >
                    <Stack direction={['column', 'row']} gap={3} sx={{ flexWrap: 'wrap' }}>
                        <TextField
                            className=''
                            sx={{ flex: [1, '100%'] }} // Responsive width
                            id="filled-basic"
                            label="First Name"
                            variant="filled"
                        />
                        <TextField
                            className=''
                            sx={{ flex: [1, '100%'] }} // Responsive width
                            id="filled-basic"
                            label="Last Name"
                            variant="filled"
                        />
                    </Stack>
                    <TextField className='' id="filled-basic" label="Email" variant="filled" />
                    <TextField className='' id="filled-basic" label="Contact Number" variant="filled" />
                    <TextField className='' id="filled-basic" label="Address 1" variant="filled" />
                    <TextField className='' id="filled-basic" label="Address 2" variant="filled" />
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Role"
                        defaultValue="Admin"
                        helperText="Please select your role"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Box sx={{ textAlign: 'right' }}>
                        <Button type='submit' className='capitalize' variant="contained" color="primary">Create New User</Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
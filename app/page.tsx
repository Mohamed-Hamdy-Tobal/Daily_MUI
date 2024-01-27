import React from 'react'
import { Button, IconButton, MenuItem, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { Delete, Menu } from '@mui/icons-material';

const Home = () => {
    return (
        <div className="home">
            <Container maxWidth="xl">
                <Typography component={'h4'} variant='h4' color='#ff5b5b'>Mohamed Tobal</Typography>
                <Typography noWrap component={'p'} variant='body1' color='#333'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptas corrupti vel expedita dignissimos dicta doloremque nesciunt architecto est omnis vitae eos, incidunt nisi odio voluptatem at quisquam quod repudiandae?</Typography>
                <MarkunreadIcon/>
                <Button endIcon={<Delete/>} variant='contained' color='error' className='bg-[tomato]'>Delete</Button>
                <IconButton size='large'><Menu /></IconButton>
            </Container>
        </div>
    )
}

export default Home
'use client'

import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Title from '@/components/Title';
import { columnsContact, rowsContact } from '@/Constants/data';


const Contact = () => {
    // Assuming columns is an array of column configurations for DataGrid
    const updatedColumns = columnsContact.map(column => ({
        ...column,
        cellClassName: 'dark:text-white', // Add dark:text-white class to cellClassName
    }));
    const updatedRows = rowsContact.map(row => ({
        ...row,
        cellClassName: 'dark:text-white', // Add dark:text-white class to cellClassName
    }));

    return (
        <div className="Contact main-page">
            <div className="container">
                <Title title="Contact" />
                <div style={{ height: 600, width: '100%' }} className='dark:text-white'>
                    <DataGrid rows={updatedRows} columns={updatedColumns} slots={{ toolbar: GridToolbar }}/>
                </div>
            </div>
        </div>
    );
};


export default Contact

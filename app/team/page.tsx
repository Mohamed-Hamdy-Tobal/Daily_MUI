'use client'

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Title from '@/components/Title';
import { columns, rows } from '@/Constants/data';


const Team = () => {
    // Assuming columns is an array of column configurations for DataGrid
    const updatedColumns = columns.map(column => ({
        ...column,
        cellClassName: 'dark:text-white', // Add dark:text-white class to cellClassName
    }));
    const updatedRows = rows.map(row => ({
        ...row,
        cellClassName: 'dark:text-white', // Add dark:text-white class to cellClassName
    }));

    return (
        <div className="Team m-p dark:bg-main-dark-bg dark:text-white">
            <div className="container">
                <Title title="Team" />
                <div style={{ height: 600, width: '100%' }} className='dark:text-white'>
                    <DataGrid rows={updatedRows} columns={updatedColumns} />
                </div>
            </div>
        </div>
    );
};


export default Team

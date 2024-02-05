import { AdminPanelSettingsOutlined, LockOutlined, SecurityOutlined } from '@mui/icons-material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';

export const rows: GridRowsProp = [
    { id: 1, name: 'Harvie Roxi', email: 'harvieroxi@gmail.com', age:33, phone: '(444)945-553', access: 'Admin' },
    { id: 2, name: 'Michal Jonson', email: 'michaljonson@gmail.com', age:23, phone: '(333)920-345', access: 'Admin' },
    { id: 3, name: 'Robert Yaya', email: 'robertyaya@gmail.com', age:55, phone: '(222)625-633', access: 'Admin' },
    { id: 4, name: 'Sami Soni', email: 'samisoni@gmail.com', age:87, phone: '(556)456-367', access: 'Manager' },
    { id: 5, name: 'Eleina Downi', email: 'eleinadowni@gmail.com', age:19, phone: '(111)456-632', access: 'Manager' },
    { id: 6, name: 'Tom Hazard', email: 'tomhazard@gmail.com', age:22, phone: '(777)637-627', access: 'User' },
    { id: 7, name: 'Bool Keen', email: 'boolkeen@gmail.com', age:42, phone: '(222)126-900', access: 'User' },
    { id: 8, name: 'Jonior Martin', email: 'joniormartin@gmail.com', age:35, phone: '(999)567-513', access: 'User' },
    { id: 9, name: 'Alvaris Fermino', email: 'alvarisfermino@gmail.com', age:31, phone: '(666)902-683', access: 'User' },
];

// -> Field Required
export const columns: GridColDef[] = [
{ field: 'id', headerName: 'ID', width: 40, align: 'center', headerAlign: 'center'},
{ field: 'name', headerName: 'Name', align: 'center', headerAlign: 'center'},
{ field: 'email', headerName: 'Email', flex:1, align: 'center', headerAlign: 'center'},
{ field: 'age', headerName: 'Age', align: 'center', headerAlign: 'center'},
{ field: 'phone', headerName: 'Phone', flex:1, align: 'center', headerAlign: 'center'},
{ 
    field: 'access', 
    headerName: 'Access', 
    flex:1, 
    align: 'center', 
    headerAlign: 'center',
    renderCell: (params) => {
        return (
            <div style={{
                backgroundColor: params.value === 'Admin'? '#009688' : params.value === 'Manager'? '#9C27B0' : '#3F51B5',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                width: '100px',
                textAlign: 'center',
                height: '30px',
                fontSize: '12px',
                fontWeight: 'bold',
                lineHeight: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
            }}>
                
                {params.value === 'Admin'? <AdminPanelSettingsOutlined/> : params.value === 'Manager'? <SecurityOutlined/>  : <LockOutlined/>}
                <span>{params.value}</span>
            </div>
        )
    }
    },
];
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

export const rowsContact: GridRowsProp = [
    { id: 1, registerid: '464623', name: 'Harvie Roxi', age:33, phone: '(444)945-553', email: 'harvieroxi@gmail.com' , address:'Alex', city:'Zaid', zipCode:'823579'},
    { id: 2, registerid: '621342', name: 'Michal Jonson', age:23, phone: '(333)920-345', email: 'michaljonson@gmail.com' , address:'Cairo', city:'Zaid', zipCode:'245678'},
    { id: 3, registerid: '179572', name: 'Robert Yaya', age:55, phone: '(222)625-633', email: 'robertyaya@gmail.com' , address:'Alex', city:'Zaid', zipCode:'253456'},
    { id: 4, registerid: '235145', name: 'Sami Soni', age:87, phone: '(556)456-367', email: 'samisoni@gmail.com' , address:'Cairo', city:'Zaid', zipCode:'267531'},
    { id: 5, registerid: '679672', name: 'Eleina Downi', age:19, phone: '(111)456-632', email: 'eleinadowni@gmail.com' , address:'Cairo', city:'Zaid', zipCode:'572727'},
    { id: 6, registerid: '124797', name: 'Tom Hazard', age:22, phone: '(777)637-627', email: 'tomhazard@gmail.com' , address:'Alex', city:'Zaid', zipCode:'88425'},
    { id: 7, registerid: '976832', name: 'Bool Keen', age:42, phone: '(222)126-900', email: 'boolkeen@gmail.com' , address:'Cairo', city:'Zaid', zipCode:'658967'},
    { id: 8, registerid: '246346', name: 'Jonior Martine', age:35, phone: '(999)567-513', email: 'joniormartin@gmail.com' , address:'Alex', city:'Zaid', zipCode:'694002'},
    { id: 9, registerid: '685342', name: 'Alvaris Fermino', age:31, phone: '(666)902-683', email: 'alvarisfermino@gmail.com' , address:'Cairo', city:'Zaid', zipCode:'687860'},
];

// -> Field Required
export const columnsContact: GridColDef[] = [
{ field: 'id', headerName: 'ID', width: 40, align: 'center', headerAlign: 'center'},
{ field: 'registerid', headerName: 'Register ID', align: 'center', headerAlign: 'center'},
{ field: 'name', headerName: 'Name', flex:1, align: 'center', headerAlign: 'center'},
{ field: 'age', headerName: 'Age', align: 'center', headerAlign: 'center'},
{ field: 'phone', headerName: 'Phone', flex:1, align: 'center', headerAlign: 'center'},
{ field: 'email',headerName: 'Email', flex:1, align: 'center', headerAlign: 'center',},
{ field: 'address',headerName: 'Address', flex:1, align: 'center', headerAlign: 'center',},
{ field: 'city',headerName: 'City', flex:1, align: 'center', headerAlign: 'center',},
{ field: 'zipCode',headerName: 'Zip Code', flex:1, align: 'center', headerAlign: 'center',},
];
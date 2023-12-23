import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../assets/dummy.js'
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {setActiveMenu, toggleFeature } from '../Store/Reducers/dashReducer.js'
import { Fragment } from "react"

const Sidebar = () => {

    const dispatch = useDispatch()
    const {activeMenu} = useSelector((state) => state.dashReducer)

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    const handleClose = () => {
        if (activeMenu && window.innerWidth <= 768) {
            console.log("happy")
            dispatch(setActiveMenu(false));
        }
    }
    
    return (
        <div className="sidebar pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (<>
                 {/* The Logo And Close Button */}
                <div className="flex items-center justify-between">
                    <Link to='/' onClick={() => {handleClose()}} className="flex justify-center gap-3 ml-3 mt-4 items-center text-xl font-extrabold tracking-tight dark:text-white text-salte"><SiShopware/> <span>Shoppy</span></Link>
                    <TooltipComponent content='Menu' position='BottomCenter'>
                        <button type='button' onClick={() => {dispatch(toggleFeature("activeMenu"))}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'><MdOutlineCancel/></button>
                    </TooltipComponent>
                </div>

                {/* The Links */}
                <div className='mt-10'>                
                    {links.map((item) => (
                    <Fragment key={item.title}>
                        <p className='text-gray-400 m-3 uppercase'>{item.title}</p>
                        {item.links.map((link) => (
                        <NavLink to={`/${link.name}`} key={link.name} onClick={() => {handleClose()}} className={({ isActive }) => (isActive ? activeLink : normalLink)} style={({ isActive }) => ({backgroundColor: isActive ? '#03c9d7' : ''})}>
                            {link.icon}
                            <span className='capitalize'>{link.name}</span>
                        </NavLink>
                        ))}
                    </Fragment>))}
                </div>
            </>)}
        </div>
    )
}

export default Sidebar
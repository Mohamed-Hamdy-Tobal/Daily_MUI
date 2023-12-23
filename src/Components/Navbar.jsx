import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../assets/imgs/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFeature, setActiveMenu } from '../Store/Reducers/dashReducer'
import Chat from './Chat'
import Notifications from './Notifications'
import UserProfile from './UserProfile'
import Cart from './Cart'
import { useEffect, useState } from 'react'


const NavButton = ({title, color, dotColor, customFunc, icon}) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
        <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {

    const [size, setSize] = useState(null)

    const dispatch = useDispatch()
    const {chat, cart, userProfile, notification} = useSelector((state) => state.dashReducer)

    useEffect(() => {

    const handleResize = () => {
        setSize(window.innerWidth)
    };
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    useEffect(() => {
        if (size <= 768) {
            console.log('size', size)
            dispatch(setActiveMenu(false))
        } else {
            dispatch(setActiveMenu(true))
        }
    },[size, dispatch])

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title='Menu' customFunc={() => {dispatch(toggleFeature("activeMenu"))}} icon={<AiOutlineMenu/>} color='#1a97f5' />
            <div className="flex items-center">
                <NavButton title='Cart' customFunc={() => {dispatch(toggleFeature("cart"))}} icon={<FiShoppingCart/>} color='#1a97f5' />
                <NavButton title='Chat' customFunc={() => {dispatch(toggleFeature("chat"))}} icon={<BsChatLeft/>} color='#1a97f5' dotColor='#03C9D7'/>
                <NavButton title='Notification' customFunc={() => {dispatch(toggleFeature("notification"))}} icon={<RiNotification3Line/>} color='#1a97f5' dotColor='#fec90f'/>
                <TooltipComponent content='Profile' position="BottomCenter">
                    <button
                    type="button"
                    onClick={() => {dispatch(toggleFeature("userProfile"))}}
                    style={{ color:  '#999'}}
                    className="relative text-xl rounded-lg hover:bg-light-gray p-1"
                    >
                        <div className="flex text-[14px] items-center gap-2">
                            <img src={avatar} alt="avatar" className='w-[32px] rounded-full'/>
                            <div className="name"><span>Hi,</span> <span className='font-bold tracking-tighter text-[#949494]'>Mohamed</span></div>
                            <MdKeyboardArrowDown/>
                        </div>
                    </button>
                </TooltipComponent>

                {cart && <Cart/>}
                {notification && <Notifications/>}
                {chat && <Chat/>}
                {userProfile && <UserProfile/>}
            </div>
        </div>
    )
}

export default Navbar

// 1:18:40
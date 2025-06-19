import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className='bg-blue-600 text-white px-4 py-6 flex justify-between'>
            <div className='text-xl font-bold'>TASKMANAGER</div>
            <div className='space-x-4'>
                <Link to='/'className='hover:underline'>HOME</Link>
                <Link to='/about'className='hover:underline'>ABOUT</Link>
            </div>

        </nav>
    );

}

export default Navbar;
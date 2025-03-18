import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="fixed w-full flex justify-end p-6">
            <div  className='flex justify-center'>
                <Link to="/cart" className='rounded-sm cursor-pointer hover:bg-secondary transition-colors p-2'>
                    <ShoppingBag className='text-primary' />
                </Link>
            </div>
        </header>
    );
}
 
export default Header;
import useCart from '@/hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
    const { items, total, clearCart } = useCart();
    
    return (
        <section className='flex justify-center min-h-screen px-6 py-28'>
            <div className='flex flex-col items-center w-200'>
                <h2 className='text-2xl py-8'>Cart</h2>
                {items.length === 0 ? (
                    <div className='flex items-center justify-center w-full bg-zinc-100 border rounded-xl'>
                        <p className="text-gray-500 text-center py-8">Your cart is empty!</p>
                    </div>
                ) : (
                    <div className='flex flex-col md:flex-row gap-6'>
                        <ul className='w-full flex flex-col items-center space-y-6 order-2 md:order-1'>
                            {items.map(item => (
                                <CartItem key={item.product.id} item={item} />
                            ))}
                            <button
                                className='cursor-pointer px-4 py-2 rounded text-red-500 hover:bg-red-100 transition-colors ease-in-out duration-300'
                                onClick={() => clearCart()}
                            >
                                Clear cart
                            </button>
                        </ul>
                        <div className='flex flex-col justify-center gap-4 w-full md:w-[20rem] h-fit p-4 border rounded-xl order-1 md:order-2'>
                            <p><span className='text-zinc-400'>Total price: </span>€ {total.toFixed(2)}</p>
                            <button className='py-2 rounded cursor-pointer text-primary-foreground bg-blue-500 hover:bg-blue-600 transition-colors'>Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
 
export default Cart;
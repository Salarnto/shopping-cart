import React from 'react';
import { Product } from '../types/types';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import useCart from '../hooks/useCart';
  

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addItem } = useCart();

    return (
        <Card>
            <img
                src={product.image}
                alt={product.name}
                className='w-full h-60 object-cover'
            />
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>€ {product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardFooter>
                <button onClick={() => addItem(product)} className='bg-zinc-100 px-6 py-2 rounded-md cursor-pointer font-semibold hover:underline'>
                    Add to cart
                </button>
            </CardFooter>
        </Card>
    );
}
 
export default ProductCard;
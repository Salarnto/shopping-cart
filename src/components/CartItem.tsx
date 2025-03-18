import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CartItem as CartItemType } from "@/types/types";
import { Minus, Plus } from 'lucide-react';
import { useCart } from "@/context/CartContext";

interface CartItemProps {
    item: CartItemType;
}

const CartItemCard: React.FC<CartItemProps> = ({ item }) => {
    const { updateQuantity, removeItem } = useCart();

    const handleDecrease = () => {
        if (item.quantity > 1) {
          updateQuantity(item.product.id, item.quantity - 1);
        } else {
          removeItem(item.product.id);
        }
    };
    
    const handleIncrease = () => {
        updateQuantity(item.product.id, item.quantity + 1);
    };

    return (
        <Card className="flex flex-row justify-start gap-0 w-full">
            <img
                src={item.product.image}
                alt={item.product.name}
                className="w-50 h-50 object-cover"
            />
            <div className="flex flex-col justify-around w-full p-4">
                <CardHeader className="px-0">
                    <CardTitle>{item.product.name}</CardTitle>
                    <CardDescription className="flex flex-col">
                        <span>Price: <span className="text-primary font-semibold">€ {item.product.price}</span></span>
                    </CardDescription>
                </CardHeader>
                <CardFooter className="px-0">
                        <button
                            className="cursor-pointer bg-red-500 hover:bg-red-600 rounded"
                            onClick={handleDecrease}
                        >
                            <Minus className="text-zinc-50" />
                        </button>
                        <span className="px-4 text-primary font-semibold">{item.quantity}</span>
                        <button
                            className="cursor-pointer bg-blue-500 hover:bg-blue-600 rounded"
                            onClick={handleIncrease}
                        >
                            <Plus className="text-zinc-50" />
                        </button>
                </CardFooter>
            </div>
        </Card>
    );
}
 
export default CartItemCard;
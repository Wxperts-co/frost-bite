"use client";
import dynamic from 'next/dynamic';

export const CartDrawer = dynamic(() => import('@/components/cart/CartDrawer'), { ssr: false });
export const StickyCheckoutButton = dynamic(() => import('@/components/cart/StickyCheckoutButton'), { ssr: false });

"use client";
import dynamic from 'next/dynamic';

export const TestimonialSection = dynamic(() => import('@/components/home/TestimonialSection'), { ssr: false });
export const GallerySection = dynamic(() => import('@/components/home/GallerySection'), { ssr: false });

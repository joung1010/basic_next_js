'use client';
import React from 'react';
import {useRouter} from "next/navigation";

function GoProductsButton() {
    const router = useRouter();
    return (
        <button onClick={() => {router.push('/products')}}>제품 페이지</button>
    );
}

export default GoProductsButton;
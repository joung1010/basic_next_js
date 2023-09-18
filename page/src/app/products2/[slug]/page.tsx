import React from 'react';

type Props = {
    params: {
        slug: string;
    }
}

function PantsPage({params}: Props) {
    return (
        <div>{params.slug} 제품 설명을 해볼까나??</div>
    );
}

export function generateStaticParams() {/*Next.js 규격함수명*/
    const products = ['pants','shirts'];
    return products.map(product => ({slug:product,}));
}

export default PantsPage;
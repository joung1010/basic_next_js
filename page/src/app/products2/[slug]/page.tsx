import React from 'react';
import NotFound from '../../not-found'
type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({params}: Props) {
    return {
        title:`제품의 이름은 ${params.slug}`,
    };
}

function PantsPage({params}: Props) {
    if (params.slug === 'noting') {
        return (<NotFound/>);
    }
    return (
        <div>{params.slug} 제품 설명을 해볼까나??</div>
    );
}

export function generateStaticParams() {/*Next.js 규격함수명*/
    const products = ['pants','shirts'];
    return products.map(product => ({slug:product,}));
}

export default PantsPage;
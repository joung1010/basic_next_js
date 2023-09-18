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

export default PantsPage;
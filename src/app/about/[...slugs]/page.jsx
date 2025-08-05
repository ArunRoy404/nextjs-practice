import React from 'react';

const SlugsPage = async ({params}) => {
    const p = await params
    console.log(p);
    return (
        <div>
            this the slug page
        </div>
    );
};

export default SlugsPage;
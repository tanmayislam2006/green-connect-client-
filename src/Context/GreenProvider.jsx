import React from 'react';
import GreenContext from './GreenContext';

const GreenProvider = ({children}) => {
    const name="Green Connect"
    const sharedData={
name
    }
    return (
<GreenContext value={sharedData}>
    {children}
</GreenContext>
    );
};

export default GreenProvider;
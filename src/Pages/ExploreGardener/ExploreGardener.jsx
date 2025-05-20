import { BorderBeam } from '@stianlarsen/border-beam';
import React from 'react';

const ExploreGardener = () => {
    return (
        <div>
            this is explore gardener page
                <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <BorderBeam borderWidth={4} size={300} duration={10} />
    </div>
        </div>
    );
};

export default ExploreGardener;
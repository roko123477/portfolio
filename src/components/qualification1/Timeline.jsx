
import React from 'react';

import Timelineitem from './Timelineitem';
import timelineElements from './timelineElements';
const Timeline = () =>
timelineElements.length > 0 && (
        <div className="timeline-container">
            {timelineElements.map((data, idx) => (
                <Timelineitem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
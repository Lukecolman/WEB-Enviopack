import React from 'react';

const TrackingDetailItem = ({ date, time, status}) => {
  return (
    <div className={`trackingDetailsItems-container`}>
    

        {/* DATE AND TIME */}
      <div className='trackingDetailsItems-DaT-container'>
        <p className="trackingDetailsItems-date">
          {date}
        </p>
        <span className="trackingDetailsItems-time">
          {time}
        </span>
      </div>

      {/* MARKER */}
      <div className={`marker-container`}>
        <div className='marker-outer'>
        <div className='marker-inner' />
            </div>
        
      </div>

      {/* STATUS */}
      <div className="trackingDetailsItems-status">
        {status}
      </div>

    </div>
  );
};

export default TrackingDetailItem;

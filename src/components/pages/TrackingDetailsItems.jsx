import React from 'react';

const TrackingDetailItem = ({ date, time, status, disabled }) => {
  return (
    <div className={`trackingDetailsItems-container ${disabled ? 'disabled' : ''}`}>
    

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
      <div className={`marker-container ${disabled ? 'disabled' : ''}`}>
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

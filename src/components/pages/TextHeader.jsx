import React from 'react';
import { useTranslation } from 'react-i18next';

const TextHeader = ({ currentTextHeader }) => {
  const { t } = useTranslation();

  return (
    <div className='text-header-container'>
      <div className='text-header-content'>
        <div className='text-title'>{t(currentTextHeader.header.title)}</div>
        <div className='text-description'>{t(currentTextHeader.header.description)}</div>
      </div>
    </div>
  );
};

export default TextHeader;

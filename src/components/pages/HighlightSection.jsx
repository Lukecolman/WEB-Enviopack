import React from 'react';
import { useTranslation } from 'react-i18next';

const HighlightSection = ({ currentHighlight, highlightImg, highlightURL, highlightImgClass }) => {
    const { t } = useTranslation();

    const firstImage = highlightImg && highlightImg.length > 0 && highlightImg[0];

    const imgSrc = firstImage && firstImage.img;

    return (
        <div>
            <div className='header-section '>
                <div className='highlight-container'>
                    <div className='highlight-content'>
                        <div className='highlight-header'>
                            <span>{t(currentHighlight.highlightSection.subtitle)}</span>
                            <h2 className='highlight-h2'>{t(currentHighlight.highlightSection.title)}</h2>
                        </div>
                        <p className='highlight-description '>
                            {currentHighlight.highlightSection.content}
                            <a
                                className='highlight-description-url'
                                href={highlightURL && highlightURL.length > 0 ? highlightURL[0].url : '#'}
                                target='_blank'
                                rel='noopener noreferrer'>
                                {t(currentHighlight.highlightSection.linkText)}
                            </a>
                        </p>
                        <button className='header-button'>
                            <div className='button-text'>{t(currentHighlight.highlightSection.button)}</div>
                        </button>
                    </div>

                    <div className='header-image relative'>
                        <img
                            className={`header-image-content${highlightImgClass ? ' ' + highlightImgClass : ''}`}
                            src={imgSrc}
                            alt={t(currentHighlight.highlightSection.button)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightSection;

import React from 'react';
import { useTranslation } from 'react-i18next';


const HighlightSection = ({ currentHighlight, highlightImg }) => {
    const { t } = useTranslation();

  const firstImage = highlightImg && highlightImg.length > 0 && highlightImg[0];

  const imgSrc = firstImage && firstImage.img;

    return (
        <div>
            <div className='header-section '>
                <div className='highlight-container'>
                    <div className="highlight-content">
                        <div className="highlight-header">
                            <span>                            
                                {t(currentHighlight.highlightSection.subtitle)}
                            </span>
                            <h2 className="highlight-h2">
                                {t(currentHighlight.highlightSection.title)}
                            </h2>
                        </div>
                        <div className="highlight-description ">
                            {currentHighlight.highlightSection.content}
                        </div>
                        <button className='header-button'>
                            <div className="button-text">
                            {t(currentHighlight.highlightSection.button)}
                            </div>
                        </button>
                    </div>

                    <div className='header-image relative'>
                        <img className='header-image-content' src={imgSrc} alt={t(currentHighlight.highlightSection.button)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightSection;

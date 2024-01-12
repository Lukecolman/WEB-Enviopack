import React from 'react';
import { useTranslation } from 'react-i18next';

const SubBeneficios = ({ sectionTitle, itemsIcon, itemsText }) => {
    const { t } = useTranslation();

    return (
        <>
            <section className='sectionCenter beneficios-section bg-gradient-to-b from-[#F2F5FF] to-[#CFE8FC]'>
                <div className='subBeneficios-container'>
                    <div className='beneficios-inner'>
                        <div className='beneficios-content'>
                          {/* TITLE */}
                            <div className='section-header dark-text'>
                                <h2>{sectionTitle}</h2>
                            </div>
                            <div className='subBeneficios-title-container'>

                              {/* CARDS */}
                                <div className='beneficios-cards-container subBeneficios-cards-container'>
                                    {itemsIcon.map((item, index) => (
                                        <div className='  subBeneficios-card' key={index}>
                                            <div className='beneficios-icon-container '>
                                                <img className='subBeneficios-top-icon' src={item.icon} alt='' />
                                            </div>
                                            <div className='subBeneficios-title '>
                                                <img src={item.icon} alt='' />

                                                {t(itemsText.benefits[index].title)}
                                            </div>
                                            <div className='subBeneficios-content-text'>
                                                {t(itemsText.benefits[index].content)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubBeneficios;

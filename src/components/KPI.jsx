import React from 'react';
import { useTranslation } from 'react-i18next';
import KpiGallery from './Home/KpiGallery';

const KPI = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>KPI</div>
            <section className='flexCenter'>
                <div className='w-[1512px] z-10 pl-[188.17px] pr-[191.83px] pt-[76.65px] pb-[160.19px] bg-gradient-to-br flex-col justify-start items-center gap-[64.37px] inline-flex bg-gray-600'>
                    <div className='h-[158.79px] pb-[4.79px] flex-col justify-start items-center gap-4 inline-flex'>
                        <div className="text-center text-slate-700 text-5xl font-semibold font-['Outfit'] leading-[78px]">
                            {t('kpi.title')}
                        </div>
                        <div className="w-[723px] text-center text-slate-700 text-lg font-normal font-['DM Sans'] leading-[30px]">
                            {t('kpi.content')}
                        </div>
                    </div>
                    <KpiGallery />
                </div>
            </section>
        </>
    );
};

export default KPI;

import React from 'react'
import ClientSlider from '../global/Client'
import { CLIENT_SLIDER_BREAK_POINTS, CLIENTS_SLIDER_DATA, OUR_CLIENT_SAYS, PERKS_DATA } from '@/constants/homepage'
import Perks from '../homepage/Perks'
import ClientSays from '../homepage/ClientSays'
import Faq from '../FAQ/Faq'
import { FAQ_DATA } from '@/constants/home-page/faq-section'
import ServiceHeroSection from './ServiceHeroSection'

const ServiceSinglePage = ({ data }) => {
    return (
        <>
            <ServiceHeroSection data={data?.heroSection} />
            <ClientSlider
                data={CLIENTS_SLIDER_DATA}
                breakPoints={CLIENT_SLIDER_BREAK_POINTS}
                bgColor={'#029894'}
                txtColor={'#ffffff'}
                compeleteTitle={
                    'Meet our partners who trust our certified tech experts'
                }
                shortTitle={'Meet our partners who trust our certified tech experts'}
                length={100}
                fontSize={{
                    xs: '19px !important',
                    sm: '20px !important',
                    md: '22px !important',
                    lg: '28px !important',
                }}
                lineHeight={{ xs: '30px !important', sm: '25px !important' }}
                fontWeight={500}
            />
            <Perks data={PERKS_DATA} link={'/book-a-demo'} target={'_blank'} />

            <ClientSays data={OUR_CLIENT_SAYS} />

            <Faq data={FAQ_DATA} />

        </>
    )
}

export default ServiceSinglePage
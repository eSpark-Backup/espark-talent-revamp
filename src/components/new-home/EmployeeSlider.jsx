'use client';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {
    slideStyle,
} from '@/constants/new-home';

const EmployeeSlider = ({ data }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [data]);

    const renderSlide = (card, index) => (
        <SwiperSlide key={index} style={slideStyle}>
            <Box sx={{ width: '225px', height: '281px', maxWidth: '225px', maxHeight: '281px', backgroundColor: "red", borderRadius: '16.08px' }}>
                <Box component={'video'} src='' />
            </Box>
        </SwiperSlide>
    );

    return (
        <Box id="pricing-difference">
            {loading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Swiper
                    style={{ paddingTop: '20px', paddingBottom: '20px' }}
                    pagination={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 7.5,
                        },
                    }}
                    modules={[Navigation]}
                >
                    {data?.map(renderSlide)}
                </Swiper>
            )}
        </Box>
    );
};

export default EmployeeSlider;

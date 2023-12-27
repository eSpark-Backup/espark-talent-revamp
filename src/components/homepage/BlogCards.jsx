'use client';
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
    DESCRIPTIONS,
    READ_MORE,
    TITLE,
    VIEW_ALL_BLOGS,
    VIEW_LESS_BLOGS,
    blogData,
} from '@/constants/home-page/blogSections';

const BlogCards = () => {
    const [visibleItems, setVisibleItems] = useState(3);

    const handleShowAllBlogs = () => {
        setVisibleItems((prevVisibleItems) =>
            prevVisibleItems === 3 ? blogData.length : 3
        );
    };

    return (
        <Box sx={{ my: 4 }}>
            <Box sx={{my: 4}}>
                <Typography sx={{
                    color: '#001C63',
                    textAlign: 'center',
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '42px'
                }}>
                    {TITLE}
                </Typography>
                <Typography sx={{
                    color: '#001C63',
                    textAlign: 'center',
                    fontSize: '19px',
                    fontWeight: 400,
                    lineHeight: '27.863px'
                }}>
                    {DESCRIPTIONS}
                </Typography>
            </Box>

            <Container>
                <Grid container columnSpacing={7} rowSpacing={4}>
                    {blogData?.slice(0, visibleItems)?.map((item, index) => (
                        <Grid item lg={4} key={index}>
                            <Box className="single-blog-post">
                                <Box className="image" sx={{ display: 'flex' }}>
                                    <span className="d-block" style={{ marginRight: '30px' }}>
                                        <Image
                                            src={item.imageLink}
                                            alt={item.title}
                                            width={900}
                                            height={100}
                                            style={{ borderRadius: '15px' }}
                                        />
                                    </span>
                                    <span className="date">
                                        {Intl.DateTimeFormat('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        }).format(new Date('2023-09-27T00:36:00.000Z'))}
                                    </span>
                                </Box>
                                <Box sx={{ width: '90%', my: 2 }}>
                                    <Typography
                                        sx={{
                                            color: '#09114A',
                                            fontSize: '23.49px',
                                            fontWeight: 600,
                                            lineHeight: '26px',
                                        }}
                                    >
                                        {item?.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#6F76A8',
                                            fontSize: '14.455px',
                                            fontWeight: 400,
                                            lineHeight: '27.465px',
                                            fontStyle: 'normal',
                                            my: 2,
                                        }}
                                    >
                                        {item?.mainParagraph}
                                    </Typography>
                                    <Link href={`/blogs/`}>
                                        <span className="default-btn" sx={{ position: 'relative' }}>
                                            <ArrowForwardIosIcon
                                                sx={{
                                                    position: 'absolute',
                                                    left: 12,
                                                    top: 10,
                                                    color: '#fff',
                                                }}
                                            />

                                            {READ_MORE}
                                        </span>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        my: 5,
                    }}
                >
                    <Button
                        variant=""
                        size="large"
                        sx={{
                            fontWeight: 700,
                            backgroundColor: '#001C63',
                            color: '#fff',
                            px: '20px',
                            py: '10px',
                            '&:hover': {
                                backgroundColor: '#001C63',
                                color: '#fff',
                            },
                        }}
                        onClick={handleShowAllBlogs}
                    >
                        {visibleItems === 3 ? VIEW_ALL_BLOGS : VIEW_LESS_BLOGS}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default BlogCards;

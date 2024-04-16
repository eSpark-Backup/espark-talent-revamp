import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ServiceCustomComponent = ({ data }) => {
    return (
        <Container
            sx={{
                pt: { xs: 3, sm: 0, md: 0, lg: 3, xl: 3 },
            }}
        >
            <Typography
                variant="h3"
                textAlign="center"
                sx={{
                    textTransform: 'capitalize',
                    fontSize: {
                        xs: '18px',
                        sm: '24px',
                        md: '35px',
                        lg: '43px',
                    },
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: '#001C63',
                    px: { xs: '2%', md: '7%', lg: '14%' },
                    '@media(min-width: 419px) and (max-width:460px)': {
                        px: '32px',
                    },
                    '@media(min-width: 461px) and (max-width:480px)': {
                        px: '39px',
                    },
                }}
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        </Container>
    );
};

export default ServiceCustomComponent;

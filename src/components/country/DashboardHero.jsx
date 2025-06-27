import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardHero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: 'center',
                gap: 4,
                px: 3,
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                color="#0B2C46"
                sx={{
                    mx: "auto",
                    width: '95%',
                    fontSize: 'clamp(23px, 5vw, 52px)',
                    maxWidth: '1000px',
                    fontWeight: 600,
                    color: '#222324',
                }}
            >
                Global Talent Onboarding at Your Fingertips
            </Typography>

            <Box
                sx={{
                    width: 'auto',
                    backgroundColor: 'rgba(130, 141, 215, 0.44)',
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: { xs: '15px', sm: '26px 26px 12px 12px' },
                    px: { xs: 1, sm: 1.5 },
                    pt: { xs: 2, sm: 3 },
                    boxShadow: '-5px 4px 59.8px rgba(24, 84, 153, 0.3)',
                }}
            >
                <img
                    src="/images/country/dashboard-hero/dashboard.png"
                    alt="Dashboard Preview"
                    style={{ width: '100%', mx: "auto", maxWidth: '1082px', height: 'auto', display: 'block' }}
                />
            </Box>
        </Box>
    );
};

export default DashboardHero;

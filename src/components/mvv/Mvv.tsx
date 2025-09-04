import { Box, Container, Typography } from '@mui/material'
import CardMVV from '../card/CardMVV'

const Mvv = () => {
    return (
        <Box id='pilares' sx={{scrollMarginTop: '150px'}}>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            fontWeight: 700,
                            background: "linear-gradient(135deg, #6c15d5 0%, #ff8e38 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 4,
                        }}
                    >
                        Nossos Pilares
                    </Typography>
                </Box>
                <CardMVV/>
            </Container>
        </Box>
    )
}

export default Mvv
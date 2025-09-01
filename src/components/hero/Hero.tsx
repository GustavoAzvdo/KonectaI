import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Squares from '../../../ReactBits/Squares/Squares'
import RotatingText from '../../../ReactBits/RotatingText/RotatingText'
const Hero = () => {

    return (
        <Box
            sx={{
                
                height: '100dvh',
                background: "linear-gradient(135deg, #6c15d5 0%, #FF8e38 100%)",
                position: "relative", // para os elementos dentro se posicionare
                overflow: 'hidden'
            }}>

            <Squares
                speed={0.1}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#999999'
                hoverFillColor='#f9f9f9'
            />
            <Container>

                <Box
                    sx={{
                        position: "absolute", // sobre o canvas
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textAlign: "center",


                    }}
                >
                    <Typography variant="h1" sx={{
                        pt: 5,
                        mb: 2, 
                        fontSize: {
                            xs: "35px", // celular
                            sm: "40px", // tablets pequenos
                            md: "46px", // desktop médio
                            lg: "56px", // telas grandes
                        },
                    }}>
                        Conectando Jovens &
                    </Typography>
                    <Stack
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}
                        direction={{ xs: "column", md: "row" }}
                    >
                        <Typography variant='h2' sx={{
                            fontSize: {
                                xs: "35px", // celular
                                sm: "40px", // tablets pequenos
                                md: "46px", // desktop médio
                                lg: "56px", // telas grandes
                            },
                        }}>
                            <Box sx={{
                                bgcolor: 'primary.main', px: 3, py: 2, borderRadius: 2, display: "inline-flex",
                                transition: "width 1s ease, min-width 0.4s ease", // suaviza a mudança de tamanho
                                overflow: "hidden",
                            }}>
                                <RotatingText
                                    texts={['Inovando', 'Desenvolvendo', 'Melhorando', 'Impactando', 'Inspirando', 'Impulsionando', 'Movimentando']}
                                    staggerFrom={"last"}
                                    initial={{ y: "130%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                    animatePresenceMode='wait'
                                    splitBy='characters'

                                    staggerDuration={0.045}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 500 }}
                                    rotationInterval={3000}
                                />

                            </Box>
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: {
                                xs: "35px", // celular
                                sm: "40px", // tablets pequenos
                                md: "50px", // desktop médio
                                lg: "56px", // telas grandes
                            },
                        }}>
                            Comunidades
                        </Typography>
                    </Stack>
                    <Container sx={{ pt: 5 }}>
                        <Typography variant='h6' sx={{
                            color: "background.paper",
                            fontSize: {
                                xs: "1.2rem",   // ~16px no celular
                                sm: "1.25rem", // ~20px em tablets
                                md: "1.5rem", // ~24px desktop médio
                            },
                            fontWeight: 400, // um pouco mais leve que 500
                            lineHeight: 1.6,
                            textAlign: { xs: "center", md: "center" }, // opcional: centraliza no mobile
                        }}>
                           Damos voz à juventude para criar tecnologia que gera mudanças reais.
                        </Typography>
                    </Container>
                    <Stack  direction= {{xs: 'column', sm: 'row', md: 'row'}} spacing={3} sx={{ mt: 5, zIndex: 10, px: 1 }}>

                        <Button
                            variant="outlined"
                            
                            size="large"
                            sx={{
                                fontSize: { xs: 16, sm: 18, md: 18 }, // xs = celular, sm = tablet, md = desktop
                                bgcolor: '#ffffff10',
                                color: 'background.paper',
                                borderColor: 'background.paper',
                                '&:hover': { color: 'primary.main', bgcolor: 'background.paper' },
                                px: { sm: 3, md: 4 }, // padding horizontal
                                py: { sm: 1.5, md: 2 }, // padding vertical
                                
                            }}
                        >
                            Entre em contato
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                fontSize: { xs: 16, sm: 16, md: 18 }, // ajusta o tamanho da fonte conforme a tela
                                bgcolor: 'background.paper',
                                color: 'primary.main',
                                px: { sm: 3, md: 4 }, // padding horizontal responsivo
                                py: { sm: 1.5, md: 2 }, // padding vertical responsivo
                            }}
                        >
                            Conheça nossos projetos
                        </Button>


                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
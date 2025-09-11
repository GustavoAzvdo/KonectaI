"use client"

import { Box, Container, Typography, Grid, IconButton, Link } from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import FacebookIcon from "@mui/icons-material/Facebook"
import logoRemoveBg from '../../assets/logoRemoveBg.png'
export default function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: "text.primary", color: "white", py: 6, mt: 10}}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2 }}>
                            <Box sx={{ width: '50px', height: '50px' }}>
                                <img src={logoRemoveBg} alt="" style={{ width: '100%', height: '100%' }} />

                            </Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 1,
                                    fontWeight: 700,
                                    background: "linear-gradient(135deg, #6c15d5 0%, #ff8e38 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    mb: 2,
                                }}
                            >
                                KonectaÍ
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 2, lineHeight: 1.6 }}>
                            Conectando jovens e transformando comunidades através de tecnologia, inovação e impacto social real.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                component={Link}
                                href="#"
                                sx={{ color: "rgba(255, 255, 255, 0.6)", "&:hover": { color: "#fbbf24" } }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                component={Link}
                                href="#"
                                sx={{ color: "rgba(255, 255, 255, 0.6)", "&:hover": { color: "#fbbf24" } }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                component={Link}
                                href="#"
                                sx={{ color: "rgba(255, 255, 255, 0.6)", "&:hover": { color: "#fbbf24" } }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                position: "relative",
                                display: "inline-block",
                                cursor: 'default',
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    bottom: -2,
                                    width: 0,
                                    height: "3px",
                                    background: "linear-gradient(90deg, #7c3aed, #f97316)",
                                    transition: "width 0.4s ease",
                                    borderRadius: "2px",
                                },
                                "&:hover::after": {
                                    width: "100%",
                                },
                            }}
                        >
                            Contato
                        </Typography>
                        {/* Icones das redes sociais */}
                         {/* <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                component={Link}
                                href="#"
                                sx={{ color: "rgba(255, 255, 255, 0.6)", "&:hover": { color: "#fbbf24" } }}
                            >
                                <TwitterIcon sx={{color: 'white'}}/>
                            </IconButton>
                            <IconButton
                                component={Link}
                                href="#"
                                sx={{ color: "rgba(220, 0, 0, 0.6)", "&:hover": { color: "#fbbf24" } }}
                            >
                                <FacebookIcon   />
                            </IconButton>
                            <IconButton
                                component={Link}
                                href="#"
                                sx={{ color: "rgba(255, 255, 255, 0.6)", "&:hover": { color: "#fbbf24" } }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Box> */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "rgba(255, 255, 255, 0.8)" }}>
                            <Typography>contato@konectai.com</Typography>
                            <Typography>+55 (12) 4002-8922</Typography>
                            <Typography>São Paulo, SP</Typography>
                        </Box>
                       
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", mt: 4, pt: 4, textAlign: "center" }}>
                    <Typography color="rgba(255, 255, 255, 0.6)">&copy; 2025 KonectAÍ. Todos os direitos reservados.</Typography>
                </Box>
            </Container>
        </Box>
    )
}

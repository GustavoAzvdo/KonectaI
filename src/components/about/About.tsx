"use client"
import { Box, Container, Typography, Grid, Paper } from "@mui/material"
import GroupsIcon from "@mui/icons-material/Groups"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import LightbulbIcon from "@mui/icons-material/Lightbulb"

const motivacoes = [
    { title: 'Colaboração', desc: '  Trabalhamos juntos para criar soluções que beneficiem toda a comunidade.', icone: <GroupsIcon sx={{ color: "white", fontSize: 32 }} /> },
    { title: 'Impacto Social', desc: '  Cada projeto é pensado para gerar mudanças positivas e duradouras.', icone: <FlashOnIcon sx={{ color: "white", fontSize: 32 }} /> },
    { title: 'Inovação', desc: '  Usamos as mais novas tecnologias para resolver problemas antigos.', icone: <LightbulbIcon sx={{ color: "white", fontSize: 32 }} /> }

]

export default function AboutSection() {
    return (
        <Box id="sobre" sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: "4xl", mx: "auto", textAlign: "center" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            fontWeight: 700,
                            background: "linear-gradient(135deg, #7c3aed 0%, #f97316 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 4,
                        }}
                    >
                        Ideias de jovens, soluções reais
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1.125rem", md: "1.25rem" },
                            color: "text.secondary",
                            mb: 6,
                            lineHeight: 1.6,
                        }}
                    >
                        Na KonectaÍ, acreditamos que os jovens têm o poder de transformar suas comunidades. Combinamos tecnologia de
                        ponta com paixão social para criar soluções que realmente importam.
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 8 }}>
                        {motivacoes.map((mot, key) => (

                            <Grid size={{ xs: 12, sm: 12, md: 4 }} key={key}>
                                <Paper elevation={0} sx={{ textAlign: "center", p: 3, backgroundColor: "transparent" }}>
                                    <Box
                                        sx={{

                                            width: 64,
                                            height: 64,
                                            background: "linear-gradient(135deg, #7c3aed 0%, #f97316 100%)",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 2,
                                        }}
                                    >
                                       {mot.icone}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        {mot.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {mot.desc}
                                    </Typography>
                                </Paper>
                            </Grid>

                        ))}


                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

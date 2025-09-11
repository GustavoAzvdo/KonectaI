"use client"
import { Box, Container, Typography, Grid, Paper } from "@mui/material"
import GroupsIcon from "@mui/icons-material/Groups"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import DevicesIcon from "@mui/icons-material/Devices"

import sobrenos1 from '../../../public/sobrenos1.png'
import sobrenos2 from '../../../public/sobrenos2.png'
import sobrenos3 from '../../../public/sobrenos3.png'

const motivacoes = [
    { title: 'Colaboração', desc: '  Trabalhamos juntos para criar soluções que beneficiem toda a comunidade.', icone: <GroupsIcon sx={{ color: "white", fontSize: 32 }} /> },
    { title: 'Impacto Social', desc: '  Cada projeto é pensado para gerar mudanças positivas e duradouras.', icone: <FlashOnIcon sx={{ color: "white", fontSize: 32 }} /> },
    { title: 'Tecnologia', desc: '  Usamos as mais novas tecnologias para resolver problemas antigos.', icone: <DevicesIcon sx={{ color: "white", fontSize: 32 }} /> }

]

export default function AboutSection() {
    return (
        <Box id="sobre" sx={{ scrollMarginTop: '88px', py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: "4xl", mx: "auto", textAlign: "center" }}>
                    <Box>
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
                            Sobre nós
                        </Typography>
                        <Grid container spacing={10} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Grid size={{ xs: 12, sm: 12, md: 8 }}>
                                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', sm: 'center', md: 'flex-start'}, fontWeight: '600' }}>
                                    Conexão
                                </Typography>
                                <Typography sx={{ fontSize: '20px', color: 'text.secondary', textAlign: 'justify', pt: 2 }}>
                                    O KonectAi nasceu da evolução natural de um projeto anterior, o KDABOA. A ideia inicial do KDABOA era resolver um problema comum entre os jovens: a dificuldade em encontrar informações claras e acessíveis sobre eventos locais, como shows, festas, promoções e atividades culturais.

                                    Esse projeto inicial mostrou que ferramentas digitais simples e intuitivas são a chave para conectar a juventude com o que acontece ao seu redor.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box
                                    component='img'
                                    src={sobrenos1}
                                    sx={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5px', boxShadow: '10px 0px 20px rgba(0,0,0,0.3)' }}

                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box
                                    component='img'
                                    src={sobrenos2}
                                    sx={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5px', boxShadow: '-10px 0px 20px rgba(0,0,0,0.3)' }}

                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 8 }}>
                                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', sm: 'center', md: 'flex-start'}, fontWeight: '600' }}>
                                    Empoderamento
                                </Typography>
                                <Typography sx={{ pt: 2, fontSize: '20px', color: 'text.secondary', textAlign: 'justify' }}>
                                    Compreendendo o impacto positivo do KDABOA, percebemos que era possível ir além: capacitar os jovens a identificar e solucionar problemas cotidianos. Assim nasceu o KonectAi.

                                    Nossa plataforma amplifica essa visão, dando voz ativa à juventude para que compartilhem desafios de suas comunidades e proponham soluções. Nossa missão, como programadores, é transformar essas propostas em inovações tecnológicas viáveis, construindo um ecossistema colaborativo que conecta jovens, ideias e a força da inovação.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 8 }}>
                                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', sm: 'center', md: 'flex-start'}, fontWeight: '600' }}>
                                    Inovação
                                </Typography>
                                <Typography sx={{ pt: 2,fontSize: '20px', color: 'text.secondary', textAlign: 'justify' }}>
                                    O KonectAi nasceu da experiência com o projeto KDaBoa, que nos ensinou a criar soluções digitais que realmente ajudam os jovens.

                                    Agora, o KonectAi é uma plataforma que vai além da divulgação de eventos: ele empodera a juventude a identificar problemas em suas comunidades e a propor soluções. Nossa equipe de programadores transforma essas ideias em ferramentas tecnológicas, conectando a energia dos jovens à inovação para gerar impacto social.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box
                                    component='img'
                                    src={sobrenos3}
                                    sx={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '5px', boxShadow: '10px 0px 20px rgba(0,0,0,0.3)' }}

                                />
                            </Grid>
                        </Grid>

                    </Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            fontWeight: 700,
                            background: "linear-gradient(135deg, #7c3aed 0%, #f97316 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            pt: 10,
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

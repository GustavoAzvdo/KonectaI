import { Box,  Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import projeto1 from '../../../public/projeto1.png'
import logoKdaboa from '../../assets/logoKdaboa.png'
import { GitHub, Link } from '@mui/icons-material'

type Projeto = {
    imagem: string,
    logo: string
    nome: string,
    descricao: string,
    github: string,
    link: string
}

const projetos: Projeto[] = [
    {
        imagem: projeto1,
        logo: logoKdaboa,
        nome: "KDABOA",
        descricao: "O KDABOA é uma plataforma que permite a gestores de eventos e estabelecimentos divulgarem suas atividades e promoções. Do outro lado, o público pode buscar e descobrir facilmente o que está acontecendo em sua região.",
        github: "https://github.com/GustavoAzvdo/PI_KDaBoa",
        link: "https://kdaboa.vercel.app"
    }
]
const Projects = () => {
    return (
        <Container id='projetos' sx={{scrollMarginTop: '150px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    Projetos
                </Typography>

            </Box>
            <Grid container spacing={4}>
                {projetos.map((p, id) => (
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} key={id}  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}   >
                        <Card sx={{ width: {xs: '70%', sm: '100%', md: '100%'}, bgcolor: 'white', border: '2px solid #c9c9c979' }} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p.imagem}
                                    alt="kdaboa"
                                    sx={{
                                        objectFit: 'contain'
                                    }}
                                />
                                <CardContent>
                                    <Stack direction={'row'} sx={{display: 'flex', alignItems: 'center'}} gap={1}>
                                        <Box component='img' src={p.logo} sx={{width: '30px', height: '30px'}}/>
                                        <Typography gutterBottom variant="h6" fontWeight={600} component="div" sx={{pt: 1}}>
                                            {p.nome}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {p.descricao}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton href={p.github} target='_blank'>
                                    <GitHub sx={{ color: 'primary.main' }} />
                                </IconButton>
                                <IconButton href={p.link} target='_blank'>
                                    <Link sx={{ color: 'primary.main' }} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </Container>
    )
}

export default Projects
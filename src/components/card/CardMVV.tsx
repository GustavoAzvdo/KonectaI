import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box, Grid, Stack } from '@mui/material';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import VisibilityRoundedIcon from '@mui/icons-material/Visibility';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';

import missao from '../../../public/missao.png'
import visao from '../../../public/visao.png'
import valores from '../../../public/valores.png'
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

const mvvs = [
    { nome: 'Missão', foto: missao, icone: <TravelExploreRoundedIcon fontSize='large' sx={{ color: 'white' }} />, pergunta: ' Qual é a nossa missão?', msg: '  Dar voz à juventude, transformando suas ideias e necessidades em soluções tecnológicas inovadoras que gerem impacto real na comunidade.' },
    { nome: 'Visão', foto: visao, icone: <VisibilityRoundedIcon fontSize='large' sx={{ color: 'white' }} />, pergunta: ' Qual é a nossa visão?', msg: '  Ser referência como empresa que tem como público alvo jovens,cria, conecta e inova, mostrando que a tecnologia pode nascer da escuta ativa e se transformar em mudança social positiva.' },
    { nome: 'Valores', foto: valores, icone: <Diversity1RoundedIcon fontSize='large' sx={{ color: 'white' }} />, pergunta: ' Quais são nossos valores?', msg: ' Acreditamos na escuta ativa, pois é ouvindo que encontramos os verdadeiros problemas a resolver. Defendemos a inovação guiada pela comunidade jovem, criando soluções que fazem sentido para quem as utiliza. Valorizamos a colaboração, transformando ideias coletivas em projetos concretos. Praticamos a inclusão e diversidade, reconhecendo que cada voz importa.E buscamos sempre o impacto social, colocando a tecnologia a serviço das pessoas e não o contrário.' }
]

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState<number | null>(null);

    const handleExpandClick = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    return (

        <Grid container spacing={5}>
            {mvvs.map((mvv, key) => (
                <Grid size={{ xs: 12, sm: 12, md: 4 }} key={key} sx={{ py: 3 }}>

                    <Card
                        sx={{
                            width: '100%',
                            bgcolor: 'background.default',
                            border: '1px solid #e5e5e5ff',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                boxShadow: 6,
                                borderColor: '#6c15d5',
                            },
                        }}
                    >
                        <Stack direction={'column'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4 }}>
                            <Box
                                sx={{

                                    width: 64,
                                    height: 64,
                                    background: "linear-gradient(135deg, #6c15d5 0%, #ff8e38 100%)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mx: "auto",
                                    mb: 2,
                                }}
                            >
                                {mvv.icone}
                            </Box>
                            <Typography variant='h6' fontWeight={600}>
                                {mvv.nome}
                            </Typography>
                            <CardContent>
                                <Stack direction={'column'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                    <Typography variant="body1" sx={{ color: 'text.secondary' }} fontSize={18}>
                                        {mvv.pergunta}
                                    </Typography>
                                    <CardActions
                                        disableSpacing
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <ExpandMore
                                            expand={expanded === key}
                                            onClick={() => handleExpandClick(key)}
                                            aria-expanded={expanded === key}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                </Stack>
                            </CardContent>
                        </Stack>
                        <Collapse in={expanded === key} timeout="auto" unmountOnExit>
                            <CardContent sx={{ textAlign: 'justify' }}>
                                <Typography variant='body2' color='text.secondary' fontSize={18}>
                                    {mvv.msg}
                                </Typography>
                            </CardContent>
                            <Box sx={{ width: '100%', height: '200px', pt: 1 }}>
                                <img src={mvv.foto} alt="" style={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Collapse>
                    </Card>
                </Grid>

            ))}

        </Grid>

    );
}

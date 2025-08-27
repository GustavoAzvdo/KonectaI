import { Box } from '@mui/material'
import Squares from '../../../ReactBits/Squares/Squares'
const Hero = () => {
    return (
        <Box sx={{ height: '89vh' , background: "linear-gradient(135deg, #6c15d5 0%, #FF8e38 100%)"}}>
            <Squares
                speed={0.1}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#999999'
                hoverFillColor='#f9f9f9'
            />
        </Box>
    )
}

export default Hero
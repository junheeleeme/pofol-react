import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const ParticlesStyled = styled(Particles)`
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 101%;
    height: 101%;
    z-index: -999;
    background-color: ${props => props.theme.colors.bgColor};
    transition: background ${props=> props.theme.colors.trans};
`

const Particle = ({ theme }) => {
    
    return(
        <>
            <ParticlesStyled  className="bgMount" width="100%" height="100%"
                params={{
                    "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "color" : { 
                        "value" : `${theme.colors.textColor}`
                    },
                    "shape" : {
                        "type" : "circle",
                        "stroke" : {
                            "width" : 0,
                        },
                        "polygon" : {"nb_sides" : 5}
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "speed": 0.5
                    },
                    "size": {
                        "value": 1.5
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }} />
        </>
    )
}


export default Particle;
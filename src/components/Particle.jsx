import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const ParticlesStyled = styled(Particles)`
    position: absolute;
    top: 0; left: 0;
    width: 100vw;
    height: 100%;
    z-index: -999;
    background-color: ${props => props.theme.colors.bgColor};
    transition: ${props=> props.theme.colors.trans};
`

const Particle = ({ theme }) => {
    
    return(
        <>
            <ParticlesStyled  className="bgMount" width="100%" height="100%"
                params={{
                    "particles": {
                    "number": {
                        "value": 180,
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
                            "color" : "#000000"
                        },
                        "polygon" : {"nb_sides" : 5}
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "speed": 0.3
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
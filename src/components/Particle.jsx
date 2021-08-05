import React from 'react'
import Particles from 'react-particles-js'

const Particle = () => {
    return(
        <>
            <Particles className="bg bgMount" width="100%" height="100%"
                params={{
                    "particles": {
                    "number": {
                        "value": 150,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "color" : {
                        "value" : '#fff'
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
                        "value": 1.2
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
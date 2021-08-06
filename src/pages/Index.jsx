import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'

const Index = ({ isVisible, isMount, setIsVisible}) => {

    const [isAni, setIsAni] = useState('');

    useEffect(()=>{
        if(isMount.substr(0,7) === 'unmount'){
            setIsAni("fadeOut");
        }
    },[isMount])


    return(
        <>
            <section className={`homeWrap`}>
                {
                    isVisible ? 
                    <div className={`typewriter-wrap ${isAni}`}>
                        <Typewriter
                            options={{
                                strings: [`I'm Front-End Developer`, `I'm Web Developer`],
                                autoStart: true,
                                loop: true,
                                delay : 70,
                                deleteSpeed : 35,
                                pauseFor : 7000
                            }}
                        />
                    </div>
                    :
                    <></>
                }
            </section>
        </>
    )
}

const mapStateToProps = ({menu}) => ({
    isVisible : menu.isVisible,
    isMount : menu.isMount
})

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Index);
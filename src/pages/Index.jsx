import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { connect } from 'react-redux';
import { setIsVisivle } from '../redux/index'

const Index = ({ isVisible, setIsVisivle}) => {

    useEffect(()=>{
        if(!isVisible){ //isVisible = true 이면 첫 로딩이 아님
            
            setTimeout(()=>{ 
                setIsVisivle(true); 
            }, 2000); 
        }else{
            setIsVisivle(true);
        }
    }, [])

    return(
        <>
            <section className="homeWrap">
                {
                    isVisible ? 
                    <Typewriter
                        options={{
                            strings: [`I'm Web Developer`, `I'm Front-End Developer`],
                            autoStart: true,
                            loop: true,
                            delay : 70,
                            deleteSpeed : 35,
                            pauseFor : 3000
                        }}
                    />
                    :
                    <></>
                }
            </section>
        </>
    )
}

const mapStateToProps = ({index}) => ({
    isVisible : index.isVisible
})

const mapDispatchToProps = ({ setIsVisivle });

export default connect(mapStateToProps, mapDispatchToProps)(Index);
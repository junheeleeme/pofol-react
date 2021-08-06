import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'

const Intro = ({isVisible, isMount, setIsVisible}) => {

    const [showIntro, setShowIntro] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowIntro(true); }, 2000);
        }else{
            setShowIntro(true);
        }
    },[isVisible])

    return(
        <>
            {
                showIntro 
                    ? 
                <main className={`aboutWrap ${isMount}`}>
                    어바웃
                
                </main>
                    :
                <></>
            }
        </>
    )
}

const mapStateToProps = ({menu}) => ({
    isVisible : menu.isVisible,
    isMount : menu.isMount
});

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
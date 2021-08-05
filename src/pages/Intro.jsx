import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setIsVisivle } from '../redux/index'

const Intro = ({isVisible, setIsVisivle}) => {

    const [isIntro, setIsIntro] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            
            setTimeout(()=> {
                setIsIntro(true)
                setIsVisivle(true);
            }, 2000);
            
        }else{
            setIsIntro(true);
        }
    }, [])


    return(
        <>
        { isIntro ?
            <section className="introWrap mount1">
                인트로
                <p>12</p>
            </section>
            :
            <></>

        }
        </>
    )
}

const mapStateToProps = ({index}) => ({
    isVisible : index.isVisible
})

const mapDispatchToProps = ({ setIsVisivle });

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
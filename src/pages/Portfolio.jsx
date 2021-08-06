import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'

const Portfolio = ({isVisible, isMount, setIsVisible}) => {

    const [showPofol, setShowPofol] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowPofol(true); }, 2000);
        }else{
            setShowPofol(true);
        }
    },[isVisible])

    return(
        <>
            {
                showPofol ?
                <main className={`pofolWrap ${isMount}`}>
                    포폴
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
})

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'

const Contact = ({isVisible, isMount, setIsVisible}) => {


    const [showContact, setShowContact] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowContact(true); }, 2000);
        }else{
            setShowContact(true);
        }
    },[isVisible])

    return(
        <>
            {
                showContact
                    ?
                <main className={`contactWrap ${isMount}`}>
                    컨텍트
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
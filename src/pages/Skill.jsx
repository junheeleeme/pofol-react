import React, { useEffect ,useState } from 'react'
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'

const MainStyled = styled.main`
    background: ${props=> props.theme.colors.bg2Color};
    max-width: 1080px;
    height: calc(100vh - 80px);
    transition: ${props=> props.theme.colors.trans};
    @media screen and (max-width: 1079px) { width: calc(100% - 40px); }
    @media screen and (max-width: 767px) { width: 100vw; height: 100vh; }
`

const Skill = ({isVisible, isMount, setIsVisible}) => {

    const [showSkill, setShowSkill] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowSkill(true); }, 2000);
        }else{
            setShowSkill(true);
        }
    },[isVisible])

    return(
        <>
            {
                showSkill ?
                <MainStyled className={isMount}>
                    스킬
                </MainStyled>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
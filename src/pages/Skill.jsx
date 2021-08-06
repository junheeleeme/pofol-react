import React, { useEffect ,useState } from 'react'
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'

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
                <main className={`skillWrap ${isMount}`}>
                    스킬
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

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
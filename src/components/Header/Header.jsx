import React, { memo, useEffect, useState, useRef } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsMount, setCurrentMenu } from '../../redux/index'
import styled from 'styled-components'
import ThemeToggle from '../Header/ThemeToggle'
import closeBtn from '../../images/closeBtn.png'
import topMenu from '../../images/menu.png'

const HeaderStyled = styled.header`
    height: 80px; display: block;
    @media screen and (max-width: 767px){ 
    position: absolute; top: 0; right: -280px;
    width: 280px; height: 100%; z-index: 1100; transition: 0.3s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: ${props=> props.theme.colors.bg3Color}; }
    &.on{ right: 0px; }`
const NavStyled = styled.nav`
    position: relative; max-width: 1080px; text-align: center;
    @media screen and (max-width: 767px){ padding-top: 70px; }`
const UlStyled = styled.ul`
    display: inline-block;
    line-height: 80px;
    text-align: center;
    @media screen and (max-width: 767px){ width: 100%; line-height: initialpx; }`
const LiStyled = styled.li`
    display: inline-block;
    @media screen and (max-width: 767px){ display: block; width: 100%; height: 70px; }`
const LavLinkStyled = styled(NavLink)`
    padding: 10px 30px; color: ${props=> props.theme.colors.text2Color};
    font-size: 20px; transition: color ${props=> props.theme.colors.trans};
    &:hover { color: ${props=> props.theme.colors.textColor}; }
    &.active{ font-weight: bold; color: ${props=> props.theme.colors.textColor}; }
    @media screen and (max-width: 767px){ display: inline-block; font-size: 18px; width: 100%; padding: 0; }`
const CrossBtnStyled = styled.div`
    display: none; position: absolute; top: 18px; left: 18px;
    width: 33px; height: 33px; padding: 5px; cursor: pointer;
    background: url(${closeBtn}) no-repeat center/75%;
    @media screen and (max-width: 767px){ display: inline-block; }`
const MenuBtnStyled = styled.div`
    display: none; position: absolute; top: 18px; right: 18px; padding: 5px;
    width: 30px; height: 30px; z-index: 1000; cursor: pointer;
    background: url(${topMenu}) no-repeat center/80%; 
    @media screen and (max-width: 767px){ display: block; }
`

const Header = ({ route, currentMenu, setIsMount, setCurrentMenu, theme }) => {
    
    const his = useHistory();
    const navUl = useRef(null);
    const [isTopMenu, setIsTopMenu] = useState('');
    
    const onClickTopMenu = () => {
        if(isTopMenu === ''){
            setIsTopMenu('on');
        }else{
            setIsTopMenu('');
        }
    }

    const onClickCrossBtn = () => {
            setIsTopMenu('');
    }

    const onClickNav = (e) => {
        e.preventDefault();
        setIsTopMenu('');
        navUl.current.childNodes.forEach((li, idx) => {
                
            li.children[0].classList.remove('active');

            if(li === e.target.parentElement){ //클릭한 메뉴 HTML 요소 검색
                if(currentMenu !== idx){ //같은 메뉴를 안 눌렀을 때 실행                
                    if(currentMenu < idx){ //슬라이드 효과 방향 구분
                        setIsMount("unmountSlideLeft");
                        setTimeout(()=> { setIsMount("mountSlideLeft"); }, 300);
                    }else if(currentMenu > idx){
                        setIsMount("unmountSlideRight");
                        setTimeout(()=> { setIsMount("mountSlideRight"); }, 300);
                    }
                    setCurrentMenu(idx); //현재 메뉴 위치 0 -> ~ -> 4
                }
            }
        });
        e.target.classList.add('active');        
    }

    useEffect(()=>{
        route.map((v, idx) => {
            if(idx === currentMenu){
                setTimeout(()=> { his.push(v.path); }, 300); //0.3s 이후에 주소 이동         
            }
        });
    }, [currentMenu])


    return (
        <>
            <MenuBtnStyled onClick={onClickTopMenu}/>
            <HeaderStyled className={isTopMenu}>

                <NavStyled className="navMount">
                    
                    <UlStyled ref={navUl} className="navul">
                    {
                        route.map((v, idx) =>
                            <LiStyled key={v.title+idx}>
                                <LavLinkStyled theme={theme} onClick={onClickNav} exact to={v.path}>
                                    {v.title}
                                </LavLinkStyled>
                            </LiStyled>
                        )
                    }
                    </UlStyled>
                    <ThemeToggle/>
                </NavStyled>
                <CrossBtnStyled onClick={onClickCrossBtn}/>
            </HeaderStyled>

        </>
    )
}

const mapStateToProps = ({menu}) => ({
    route : menu.route,
    currentMenu : menu.currentMenu
})

const mapDispatchToProps = ({ setIsMount, setCurrentMenu })

export default memo(connect(mapStateToProps, mapDispatchToProps)(Header))
import React, { memo, useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsMount, setCurrentMenu } from '../../redux/index'
import styled from 'styled-components'
import ThemeToggle from '../Header/ThemeToggle'
import CloseBtn from './CloseBtn'
import MenuBtn from './MenuBtn'
import Site from './Site'

const HeaderStyled = styled.header`
    height: 80px; display: block; z-index: 9999;
    @media screen and (max-width: 768px){ 
    position: fixed; top: 0; right: -280px;
    width: 280px; height: 100%; transition: 0.4s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: ${props=> props.theme.colors.bg3Color}; }
    &.on{ @media screen and (max-width: 768px){ right: 0px; }; }
    &.on ~ .bg{ left: 0; }`
const NavStyled = styled.nav`
    position: relative; max-width: 1080px; height: 100%; text-align: center;
    @media screen and (max-width: 768px){ padding-top: 70px; }`
const UlStyled = styled.ul`
    display: inline-block;
    line-height: 80px;
    text-align: center;
    @media screen and (max-width: 768px){ width: 100%; line-height: initialpx; }`
const LiStyled = styled.li`
    display: inline-block;
    @media screen and (max-width: 768px){ display: block; width: 100%; height: 70px; }`
const LinkStyled = styled(Link)`
    padding: 10px 30px; color: ${props=> props.theme.colors.text2Color};
    font-size: 20px; transition: color ${props=> props.theme.colors.trans};
    &:hover { color: ${props=> props.theme.colors.textColor}; }
    &.active{ font-weight: bold; color: ${props=> props.theme.colors.textColor}; }
    @media screen and (max-width: 1080px){ padding: 10px 20px; }
    @media screen and (max-width: 960px){ font-size: 19px; padding: 10px 17px;  }
    @media screen and (max-width: 768px){ display: inline-block; font-size: 18px; width: 100%; padding: 0; }`
const CrossBtnStyled = styled.button`
    display: none; position: absolute; top: 18px; left: 18px; padding: 0;
    width: 33px; height: 33px; cursor: pointer; background: none; border: none;
    @media screen and (max-width: 768px){ display: inline-block; }`
const HeaderBtnStyled = styled.button`
display: none; position: fixed; top: 15px; right: 18px;
width: 30px; height: 30px; z-index: 1000; cursor: pointer; padding: 0; background: none; border: none;
@media screen and (max-width: 768px){ display: block; }`
const HeaderBgStyled = styled.div`
display: none; position: fixed; top: 0; left: -100%; width: 70%; height: 100%; background: rgba(0,0,0, 0.55); z-index: 8888;
transition: 0.3s ease-in-out;
@media screen and (max-width: 768px){ display: block; };`

const Header = ({ route, currentMenu, setIsMount, setCurrentMenu, theme, themeMode}) => {
    
    const his = useHistory();
    const { location } = useHistory();
    const navUl = useRef(null);
    const [isTopMenu, setIsTopMenu] = useState(''); //모바일 메뉴 Toggle
    
    useEffect(()=> {

        const pathIdx = location.pathname.indexOf('/', 1);
        const path = pathIdx === -1 ? location.pathname : location.pathname.slice(0, pathIdx); 
        
        route.map((v, idx)=>{
            if(v.path === path){
                navUl.current.childNodes.forEach((li, navIdx)=>{ // 첫 로딩 했을 때, 현재 위치 TopMenu active 클래스 토글
                    if( navIdx === idx){
                        li.children[0].classList.add('active');
                        setCurrentMenu(idx);
                    }
                });
            }
        });

    }, [themeMode],[])


    useLayoutEffect(()=>{
        
        route.map((v, idx) => { // TopMenu 클릭시 이동
            if(idx === currentMenu){
                setTimeout(()=> { his.push(v.path); }, 300); //0.3s 이후에 주소 이동
            }
        });
        
        navUl.current.childNodes.forEach((li, idx)=>{ // TopMenu 클릭시 active 클래스 토글
            li.children[0].classList.remove('active');
            if( idx === currentMenu){
                li.children[0].classList.add('active');
            }
        });
    }, [currentMenu]);


    const onClickMenuBtn = (e) => {
        e.preventDefault();
        
        if(isTopMenu === ''){
            setIsTopMenu('on');
        }else{
            setIsTopMenu('');
        }
    }

    const onClickBg = (e) => {
        setIsTopMenu('');
    }

    const onClickCrossBtn = () => {
            setIsTopMenu('');
    }

    const onClickNav = (e) => {
        e.preventDefault();
        setIsTopMenu('');

        navUl.current.childNodes.forEach((li, idx) => {
                
            if(li === e.target.parentElement){ //클릭한 메뉴 HTML 요소 검색
                if(currentMenu < idx){ //슬라이드 효과 방향 구분
                    setIsMount("unmountSlideLeft");
                    setTimeout(()=> { setIsMount("mountSlideLeft"); }, 300);
                }else if(currentMenu > idx){
                    setIsMount("unmountSlideRight");
                    setTimeout(()=> { setIsMount("mountSlideRight"); }, 300);
                }
                setCurrentMenu(idx); //현재 메뉴 위치 0 -> ~ -> 4
            }
        });
    }


    return (
        <>
            <HeaderBtnStyled onClick={onClickMenuBtn}>  {/* 모바일 탑메뉴 버튼 */}
                <MenuBtn/>
            </HeaderBtnStyled>

            <HeaderStyled className={isTopMenu}>

                <NavStyled className="navMount">
                    
                    <UlStyled ref={navUl} className="navul">
                        {
                            route.map((v, idx) =>
                                <LiStyled key={v.title+idx}>
                                    <LinkStyled theme={theme} to={v.path} onClick={onClickNav}>
                                        {v.title}
                                    </LinkStyled>
                                </LiStyled>
                            )
                        }
                    </UlStyled>
                    <Site/>
                    <ThemeToggle/>
                </NavStyled>
                
                <CrossBtnStyled onClick={onClickCrossBtn}>
                    <CloseBtn/>
                </CrossBtnStyled>
            </HeaderStyled>
            <HeaderBgStyled className="bg" onClick={onClickBg}/>
        </>
    )
}

const mapStateToProps = ({menu, theme}) => ({
    route : menu.route,
    currentMenu : menu.currentMenu,
    themeMode : theme.themeMode
})

const mapDispatchToProps = ({ setIsMount, setCurrentMenu })

export default memo(connect(mapStateToProps, mapDispatchToProps)(Header))
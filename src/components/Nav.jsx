import React, { memo, useEffect, useState, useRef } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsMount, setCurrentMenu } from '../redux/index'
import styled from 'styled-components'
import ThemeToggle from '../components/ThemeToggle';

const HeaderStyled = styled.header`
    height: 80px;
    border: 1px solid #000`
const NavStyled = styled.nav`
    position: relative;
    max-width: 1080px;
    text-align: center;`
const UlStyled = styled.ul`
    display: inline-block;
    line-height: 80px;
    text-align: center;
    white-space:nowrap;
    overflow-x:scroll;`
const LiStyled = styled.li`
    display: inline-block;`
const LavLinkStyled = styled(NavLink)`
    padding: 10px 30px;
    color: #B2B1B9;
    font-size: 20px;
    transition: ${props=> props.theme.colors.trans};
    &:hover {
        color: ${props=> props.theme.colors.textColor};
    }
    &.active{
        color: ${props=> props.theme.colors.textColor};
        font-weight: bold;
    }`


const Nav = ({ route, currentMenu, setIsMount, setCurrentMenu, theme }) => {
    
    const his = useHistory();
    const navUl = useRef(null);
    const [responClass, setResponClass] = useState('');

    const onClickMenu = (e) => {
        e.preventDefault();

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
            <HeaderStyled className={`header`}>
                <NavStyled className="navMount">
                    
                    <UlStyled ref={navUl} className="navul">
                    {
                        route.map((v, idx) =>
                            <LiStyled key={v.title+idx}>
                                <LavLinkStyled theme={theme} onClick={onClickMenu} exact to={v.path}>
                                    {v.title}
                                </LavLinkStyled>
                            </LiStyled>
                        )
                    }
                    </UlStyled>
                    <ThemeToggle/>
                </NavStyled>
            </HeaderStyled>

        </>
    )
}

const mapStateToProps = ({menu}) => ({
    route : menu.route,
    currentMenu : menu.currentMenu
})

const mapDispatchToProps = ({ setIsMount, setCurrentMenu })

export default memo(connect(mapStateToProps, mapDispatchToProps)(Nav))
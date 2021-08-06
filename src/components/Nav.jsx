import React, { memo, useEffect, useState, useRef } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsMount, setCurrentMenu } from '../redux/index'

const Nav = ({ route, currentMenu, setIsMount, setCurrentMenu }) => {
    
    const his = useHistory();
    const navUl = useRef(null);
    const [prevMenu, setPrevMenu] = useState('');



    const onClickMenu = (e) => {
        e.preventDefault();
        
        setPrevMenu(currentMenu); //이전 메뉴 저장
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
        console.log(prevMenu)
        route.map((v, idx) => {
            
            if(idx === currentMenu){
                setTimeout(()=> { his.push(v.path); }, 300);               
            }
        });

    }, [currentMenu])


    return (
        <>
            <nav className="nav navMount">
                <ul ref={navUl}>
                    <li><NavLink onClick={onClickMenu} exact to="/" >Home</NavLink></li>
                    <li><NavLink onClick={onClickMenu} to="/about">About</NavLink></li>
                    <li><NavLink onClick={onClickMenu} to="/skill">Skill</NavLink></li>
                    <li><NavLink onClick={onClickMenu} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink onClick={onClickMenu} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

const mapStateToProps = ({menu}) => ({
    route : menu.route,
    currentMenu : menu.currentMenu
})

const mapDispatchToProps = ({ setIsMount, setCurrentMenu })

export default memo(connect(mapStateToProps, mapDispatchToProps)(Nav))
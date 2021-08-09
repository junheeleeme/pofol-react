import React, { useState, useEffet, useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import MainFade from '../components/MainFade'
import SubTitle from '../components/SubTitle'
import { connect } from 'react-redux'


const PofoleDetail = ({pofol}) => {

    const { id } = useParams(); 
    const [idx, setIdx] = useState(Number(id-1));

    console.log(pofol[0].link)
    return(

        <>
            <MainFade>
                <SubTitle>Portfolio - {pofol[idx].title}</SubTitle>
                <p>{pofol[idx].type}</p>
                <br/>
                <p>{pofol[idx].content}</p>
                <br/>
                <h4>skills</h4>
                <ul>
                    {
                        pofol[idx].skills.map((v, idx) => 
                            <li key={v+idx}>{v}</li>
                        )
                    }
                </ul>

                <h4>주소</h4>
                <a href={pofol[idx].link[0]} target="_blank">GITBUT</a>
                <br/>
                <a href={pofol[idx].link[1]} target="_blank">VIEW</a>
                
            </MainFade>
        </>
    )
}

const mapStateToProps = ({pofol}) => ({
    pofol : pofol.pofol
});

export default connect(mapStateToProps)(PofoleDetail);
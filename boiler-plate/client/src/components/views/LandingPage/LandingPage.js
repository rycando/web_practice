import React from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { PromiseProvider } from 'mongoose'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {

    const onClickHandler = () => {
        Axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                props.history.push("/login")
            } else {
                alert('로그아웃하는데 실패했습니다.')
            }
        })
    }

    return (
        <div style={{ display:'flex', flexFlow:'column', justifyContent:'center', alignItems: 'center'
        ,width: '100%', height: '100vh'}}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)

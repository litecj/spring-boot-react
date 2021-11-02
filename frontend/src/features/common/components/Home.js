import { Logout } from "features/user";
import React from "react";
import { useHistory } from 'react-router-dom';

export default function Home() {
    
    const history = useHistory()

    
    // const [sessionName, setSessionName] = useState('')
    // useEffect(() => {if(localStorage.length > 0){
    //     const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
    //     setSessionName(sessionUser.name)
    //     }else{
    //         setSessionName('None')
    //     }
    // }, []);

    // const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
    // const sessionName = sessionUser.name

    // const sessionUser = localStorage.getItem("sessionUser")
    // alert(JSON.stringify(sessionUser))
    // const logout = e => {
    //     e.preventDefault()
    //     localStorage.setItem('sessionUser','')
    //     history.push('/')
    // }

    return (<>
        <div style={{margin:'20px'}}>
            {/* <form style={{margin:'20px'}}> */}

                <h1>Home</h1>
                {  localStorage.length == 0
                //  { localStorage.getItem("sessionUser") === null
                ? <><button onClick = {e => window.location.href = `/users/add`}>회원가입</button><button onClick = {e => window.location.href = `/users/login`}>로그인</button></>
                : <><h1>안녕 :) <br/> "{JSON.parse(window.localStorage.getItem('sessionUser')).name}" 아 <br/> 로그인 중이네 ...  ?</h1></>
                // : <><button onClick = {e => window.location.href = `/users/add`}>회원가입</button><button onClick = {e => window.location.href = `/users/login`}>로그인</button></>
                // :<><button onClick = {e => history.push('/users/add')}>회원가입</button><button onClick = {e => history.push('/users/login')}>로그인</button></>
                // :<><h1>안녕 :) <br/> {JSON.parse(window.localStorage.getItem('sessionUser')).name} 아 <br/> 로그인 중이네? ...</h1></>
                }
                {/* :<h1> { localStorage.getItem("sessionUser").username} 안녕 :) 로그인 중이네? ...</h1>} */}

                <br/>
                <br/>
                <br/>

                { localStorage.length == 0 && <input type="button" value="로그인" onClick={e => window.location.href='/users/login'}/> }
                {/* { localStorage.length == 0 && <input type="button" value="로그인" onClick={e => history.push('/users/login')}/> } */}
                {/* { localStorage.getItem("sessionUser") === null && <input type="button" value="로그인" onClick={e => history.push('/users/login')}/> } */}
                { localStorage.length > 0 && <Logout/> }
                {/* { localStorage.length > 0 && <Logout/> } */}
                {/* { localStorage.getItem("sessionUser") !== null && <Logout/> } */}
                {/* {sessionUser !== '' && <input type="button" value="로그아웃" onClick={logout}/> } */}
                
            {/* </form> */}
        </div>
    </>)
}
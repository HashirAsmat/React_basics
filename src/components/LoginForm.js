import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useEffect ,useReducer} from "react";

function reducer(state,action){
    switch(action.type){
        case"userInputName":return {...state,userName:action.payload}
        case"userInputPassword":return{...state,password:action.payload}
        case"noError":return{...state,error:false}
        case"Error":return{...state,error:true}
        default:
            throw new Error();
    }
}
function LoginForm() {
    const navigate = useNavigate()

    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState(true)
const [state,dispatch] = useReducer(reducer,{userName:"",password:"",error:true})
    function submitHandler(event) {
        event.preventDefault();
        navigate("/verifyCode");
    }

    useEffect(() => {
        if(state.userName.length>=3  && state.password.length >= 8) {
            dispatch({type:"noError"})
        } else {
            dispatch({type:"Error"})
        }
    }, [state.password, state.userName])

    return <form className="login-form" onSubmit={submitHandler}>
        <div className="form-group">
            <label>Name</label>
            <input type={"text"} placeholder="Name" onChange={(event) => dispatch({type:"userInputName",payload:event.target.value})} value={state.userName} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type={"password"} placeholder="Enter Password" onChange={(event) => dispatch({type:"userInputPassword",payload:event.target.value})} value={state.password} />
        </div>
        <button type="submit" disabled={state.error}>Login</button>
    </form>
}

export default LoginForm;
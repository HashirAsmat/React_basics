import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

function VerifyCode() {
    const navigate = useNavigate()

    const [code, setCode] = useState("");
    const [error, setError] = useState(true)

    function submitHandler(event) {
        event.preventDefault();
        navigate("/users");
    }

    useEffect(() => {
        if(code.length == 6) {
            setError(false);
        } else {
            setError(true);
        }
    }, [code])

    return <form className="login-form" onSubmit={submitHandler}>
        <div className="form-group">
            <label><h2>Enter the Code</h2></label>
            <br />
            <input type={"number"} placeholder="Enter code" onChange={(event) => setCode(event.target.value)} value={code} />
        </div>
        <button type="submit" disabled={error}>Login</button>
    </form>
}

export default VerifyCode;
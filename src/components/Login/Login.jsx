import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginBack from "../../assets/loginback.png";
import styles from "./Login.module.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/order");
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    const handleCancel = () => {
        setEmail("");
        setPassword("");
        setError("");
    };

    return (
        <>
        <Header />
        <div className={styles.Page}>
            <img src={LoginBack} alt="" className={styles.BackImage} />
            <h1 className={styles.Title}>Log in</h1>
            <form className={styles.Form} onSubmit={handleSubmit}>
                <div className={styles.Field}>
                    <label htmlFor="email" className={styles.Label}>User name</label>
                    <input
                        id="email"
                        className={styles.Input}
                        type="email"
                        placeholder="UserName"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.Field}>
                    <label htmlFor="password" className={styles.Label}>Password</label>
                    <input
                        id="password"
                        className={styles.Input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={styles.Error}>{error}</p>}
                <div className={styles.Buttons}>
                    <button type="submit" className={styles.SubmitBtn}>Submit</button>
                    <button type="button" className={styles.CancelBtn} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
        <Footer />
        </>
    );
}

import Logo from '../../assets/HeaderPics/Logo.png' 
import Cart from '../../assets/HeaderPics/Group.svg' 
import styles from './Header.module.css';

const links = [
    {id: 1, label: "Home", href: "#"},
    {id: 2, label: "Menu", href: "#"},
    {id: 3, label: "Company", href: "#"},
    {id: 4, label: "Login", href: "#"}
]

export default function Header() {
    return (
        <header>

            <img src={Logo} alt="" className={styles.LogoPic}/>

            <div className={styles.HeaderLinks}>   
                <nav>
                    <ul>
                        {links.map(link => (
                            <li key={link.id}>{link.label}</li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div>
                <button>
                    <img src={Cart} alt="" className={styles.CartPic}/>  
                </button>
            </div>    

        </header>
    )

}
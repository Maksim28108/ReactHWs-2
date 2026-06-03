import Logo from '../../assets/HeaderPics/Logo.png' 
import Inst from '../../assets/FooterPics/inst.png' 
import Twitter from '../../assets/FooterPics/twitter.png' 
import Youtube from '../../assets/FooterPics/youtube.png' 

import styles from './Footer.module.css'

const columns = [
  {
    title: "COMPANY",
    links: ["Home", "Order", "FAQ", "Contact"]
  },
  {
    title: "TEMPLATE", 
    links: ["Style Guide", "Changelog", "Licence", "Webflow University"]
  },
  {
    title: "FLOWBASE",
    links: ["More Cloneables"]
  }
]

export default function Footer(){
    return(
        <footer className={styles.Footer}>
            <div className={styles.FooterTop}>
                <div>
                    <img src={Logo} alt="Logo" className={styles.FooterLogo} />
                    <p className={styles.FooterLogoText}>Takeaway & Delivery template for small - medium businesses.</p>
                </div>
                <div>
                    <nav className={styles.FooterColumns}>
                        <ul className={styles.ListTitles}>
                            {columns.map((column, index) => (
                                <li key={index}>
                                    <p>{column.title}</p>
                                    <ul className={styles.ListLinks}>
                                        {column.links.map((link, i) =>
                                            <li key={i}><a href="#">{link}</a></li>
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className={styles.Divider} />
            <div className={styles.FooterBottom}>
                <p>Built by <span className={styles.Accent}>Flowbase</span>· Powered by <span className={styles.Accent}>Webflow</span></p>
                <div className={styles.FooterIcons}>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img src={Inst} alt="Instagram" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <img src={Youtube} alt="Youtube" />
                    </a>
                </div>
            </div>                        
        </footer>
    )
}
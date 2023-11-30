import Link from "next/link"; 
import styles from './components.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
        <header>
            <nav>
                <Link href="/">User Profile</Link>
                <Link href="/login">Login</Link>
                <Link href="/create">Create User</Link>
            </nav>
        </header>
        </div>
    )
}

export default Header
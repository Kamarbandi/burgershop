import Link from 'next/link'
import {SiBurgerking} from 'react-icons/si';

const Header = () => {
    return(
        <header>
            <div>
                <SiBurgerking/>
            </div>

            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About us</Link>
                <Link href='/review'>Review</Link>
                <Link href='/burgers'>Burgers</Link>
            </nav>
        </header>
    )
}

export default Header;
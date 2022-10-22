import Link from 'next/link'

const Nav = () => {
    return (
        <div className="navWrapper">
            <nav className="navMenu">
                <Link href="/"><a>Home</a></Link>
                <Link href="/store"><a>Store</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </nav>
        </div>
    )
}

export default Nav
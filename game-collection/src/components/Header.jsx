function Header(props) {
    return (
        <header className="header-container">
            <h1 className="app-title">{props.title}</h1>
            <p className="app-slogan">Ontdek, filter en beheer jouw favoriete games</p>
        </header>
    );
}

export default Header;
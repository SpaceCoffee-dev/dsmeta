import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="header">
                    <img src={logo} alt="DSMeta Logo" className="img-header"/>
                        <h1 className="title-header">DSMeta</h1>
                        <p className="subtitle-header">Desenvolvido por @wander.anjos</p>
                </div>
            </header>
        </>
    )
}

export default Header
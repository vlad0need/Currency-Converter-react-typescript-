import logo from "../../img/logo.png"

interface IHeaderProps {
    currencies: string[]
}

export const Header = ({currencies}: IHeaderProps) => (
    <header className='header'>
          <img className='logo' src={logo} alt="" />
          <div className='title'>
            Current Currency UA
          </div>
          <div className='currentCurrency'>
              {currencies.map((cur) => (
                <span  key={cur}>{cur + `: 40.00`}</span>
              ))}
          </div>
      </header>
)
export default Header;
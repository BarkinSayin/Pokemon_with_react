import logo from "./pokemon-icon.png";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="pokemon-ball-icon" />
        <p>Pokemon</p>
      </div>
      <div className="header-right">
        <div>
          <a href="*">Pokemon Api</a>
        </div>
        <div>
          <a href="*">Pokemon Official</a>
        </div>
        <div>
          <a href="*">About Author</a>
        </div>
      </div>
    </div>
  );
}

export default Header;

import "../scss/layout/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
          alt="Rick and Morty Logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;

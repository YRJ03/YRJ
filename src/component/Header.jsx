import './css_file/Header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/YRJ03" target="_blank" rel="noopener noreferrer" className="header-link">
        <h1 className="user-name">Yuvraj Yadav</h1>
        <div className="user-dec">
          <span className="line">Full Stack Developer (MERN Stack) & Android Developer</span>
        </div>
      </a>
    </header>
  );
};

export default Header;

  
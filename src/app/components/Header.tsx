const Header = () => {
  return (
    <header className="p-2 bg-gray-800 flex justify-between">
      <h1><a href="../">My Header Component</a></h1>
      <nav>
        <ul className="flex gap-5">
          <li><a href="../about">About Page</a></li>
          <li>About</li>
          <li>Contact</li>
          <li>Social Media</li>
          <li>Color Theme</li>
        </ul>
      </nav>
    </header>


  );
};

export default Header;

const Header = () => {
  return (
    <header className="p-2 bg-gray-800 flex justify-between">
      <h1 className="font-bold"><a href="../">Home</a></h1>
      <nav>
        <ul className="flex gap-5">
          <li className="font-bold"><a href="../about">About</a></li>
        </ul>
      </nav>
    </header>


  );
};

export default Header;

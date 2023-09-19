const Header = () => {
  return (
    <div className="text-center">
      <h2>Navbar</h2>

      <div className="flex gap-4 justify-center underline">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/Contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';

function NavBar() {
  return (
    <nav className="flex h-16 items-center justify-between">
      <div>
        <NavLink to={'/'}>
          <span className="text-lg font-bold">React Synth</span>
        </NavLink>
      </div>
      <div className="flex justify-between space-x-8 text-lg">
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/explore'}>Explore</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </div>
      <div className="flex gap-y-3">
        <NavLink
          className="flex items-start justify-start"
          to={'https://github.com/vybukhivka/react-synth'}
        >
          <FaGithub size={30} />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

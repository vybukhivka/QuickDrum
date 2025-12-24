import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';

function NavBar() {
  return (
    <nav className="flex h-32 items-center justify-between text-slate-400">
      <div>
        <NavLink to={'/'}>
          <span className="text-lg font-bold text-slate-50">QiuckDrum</span>
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
          <FaGithub size={30} className="text-slate-50" />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

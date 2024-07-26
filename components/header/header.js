import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink link="/news">News</NavLink>
          </li>
          <li>
            <NavLink link="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

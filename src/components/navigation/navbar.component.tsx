import { NavLink } from 'react-router-dom';

export interface AppRoute {
    path: string;
    label: string;
    component: JSX.Element;
    showInNavigation: boolean;
}
export interface NavBarProps {
    routes: AppRoute[]
}

export const NavBar = ({ config }: { config: NavBarProps }) => {
    return (
        <nav className="uk-navbar-container" data-uk-navbar>

            <div className="uk-navbar-left">

                <ul className="uk-navbar-nav">
                    {config.routes.filter(route => route.showInNavigation).map((r, i) => <NavBarItem key={i} path={r.path} label={r.label} />)}
                </ul>

            </div>

        </nav>
    )
}

const NavBarItem = ({ path, label }: { path: string, label: string }) =>
    <li>
        <NavLink to={path} activeClassName="uk-active">
            {label}
        </NavLink>
    </li>
import { HeaderIcon, NavBar } from './Header.styled';

interface HeaderProps {
  icon: React.ReactNode;
}

export const Header = (props: HeaderProps): JSX.Element => (
  <NavBar>
    <HeaderIcon>{props.icon}</HeaderIcon>
  </NavBar>
);

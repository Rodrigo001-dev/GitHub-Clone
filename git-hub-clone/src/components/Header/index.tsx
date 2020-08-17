import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GitHubLogo, SearchForm } from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim())
  };

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <GitHubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input 
          placeholder="Enter Username or Repo..." 
          value={search} 
          onChange={e => setSearch(e.currentTarget.value)} // o  que a pessoa digitou 
        />
      </SearchForm>
    </Container>
  );
}

export default Header;
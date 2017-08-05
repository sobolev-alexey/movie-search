import React from 'react'
import SearchBarContainer from './containers/SearchBarContainer'
import './styles/style.css'

const App = ({ children }) =>
  <div>
    <SearchBarContainer brand="The Movie Database" searchText={''} />
    {children}
  </div>

export default App

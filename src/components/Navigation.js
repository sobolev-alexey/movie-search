import React from 'react'
import Autosuggest from 'react-autosuggest'
import { Navbar } from 'react-bootstrap/lib'

const Navigation = ({
  brand,
  suggestions,
  onSuggestionsFetchRequested,
  onSuggestionSelected,
  onSuggestionsClearRequested,
  getSuggestionValue,
  renderSuggestion,
  inputProps,
  onReset,
}) =>
  <Navbar bsStyle="inverse">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" onClick={onReset}>
          <span className="brand">
            {brand}
          </span>
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Form pullRight>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </Navbar.Form>
  </Navbar>

export default Navigation

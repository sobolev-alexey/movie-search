import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Suggestion, Navigation } from '../components'
import { URL_SEARCH, API_KEY } from '../constants/const'

class SearchBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestions: [],
    }
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    })
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      return this.handleSubmit(this.state.value)
    }
  }

  handleSubmit = searchText => {
    this.props.dispatch(push(`/search/${searchText}`))
    this.setState({ value: '' })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim()

    if (trimmedValue.length > 0) {
      const url = `${URL_SEARCH}${trimmedValue}&${API_KEY}`
      fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => {
          const results = data.map(
            ({ id, title, poster_path, release_date }) => ({
              id,
              title,
              img: poster_path,
              year: release_date ? release_date.substring(0, 4) : '',
            })
          )
          this.setState({
            suggestions: results,
          })
        })
        .catch(error => console.log('Exception to get Suggestions'))
    } else {
      this.setState({
        suggestions: [],
      })
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  getSuggestionValue = suggestion => suggestion.title

  renderSuggestion = suggestion => <Suggestion suggestion={suggestion} />

  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === 'enter') {
      event.preventDefault()
    }
    this.props.dispatch(push(`/movie/${suggestion.id}`))
    this.setState({
      value: '',
    })
  }

  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      value,
      onChange: this.onChange,
      onKeyPress: this.handleKeyDown,
      placeholder: 'Search Movie Title...',
    }

    return (
      <Navigation
        brand={this.props.brand}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

export default connect()(SearchBarContainer)

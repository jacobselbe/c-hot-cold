import React from 'react';

class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            value: ''
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <input type='number' value={this.state.value} onChange={e => this.onChange(e)} required />
                    <button type='submit'>Guess!</button>
                </form>
            </div>
        );
    }
}

export default GuessForm;
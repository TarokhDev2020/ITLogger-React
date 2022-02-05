import React, {useState} from 'react'

const Searchbar = () => {

    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    return (
        <nav style = {{marginBottom: '30px'}} className = "blue">
            <div className = "nav-wrapper">
                <form>
                    <div className = "input-field">
                        <input id = "search" type = "search" required placeholder = "Search Logs..." value = {text} onChange = {onChange}/>
                        <label className = "label-icon" htmlFor = "search"><i className = "material-icons">search</i></label>
                        <i className = "material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Searchbar

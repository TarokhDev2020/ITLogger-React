import React, {useEffect, useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {updateLog} from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({log: {current, loading}, updateLog}) => {

    const [message, setMessage] = useState('');
    const [attension, setAttension] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttension(current.attension);
            setTech(current.tech);
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: "Please enter a message and tech"});
        }
        else {
            const newLog = {
                id: current.id,
                message,
                attension,
                tech,
                date: new Date()
            };
            updateLog(newLog);
            M.toast({html: `Log updated by: ${tech}`});
            setMessage('');
            setTech('');
            setAttension(false);
        }
    }

    return (
        <div id = "edit-log-modal" className = "modal" style = {modalStyle}>
            <div className = "modal-content">
                <h4>Enter System Log</h4>
                <div className = "row">
                    <div className = "input-field">
                        <input type = "text" name = "message" value = {message} onChange = {e => setMessage(e.target.value)}/>
                    </div>
                </div>
                <div className = "row">
                    <div className = "input-field">
                        <select name = "tech" value = {tech} className = "browser-default" onChange = {e => setTech(e.target.value)}>
                            <option value = "" disabled>Select Technician</option>
                            <TechSelectOptions/>
                        </select>
                    </div>
                </div>
                <div className = "row">
                    <div className = "input-field">
                        <p>
                            <label>
                                <input type = "checkbox" className = "filled-in" checked = {attension} value = {attension} onChange = {e => setAttension(!attension)}/>
                                <span>Needs Attension</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className = "modal-footer">
                <a href = "#!" onClick = {onSubmit} className = "modal-close waves-effect blue wave-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => {
    return {log: state.log}
}

export default connect(mapStateToProps, {updateLog})(EditLogModal);

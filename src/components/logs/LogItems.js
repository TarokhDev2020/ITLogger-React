import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';

const LogItems = ({log, deleteLog, setCurrent}) => {

    const onDelete = () => {
        deleteLog(log.id);
        M.toast({html: "Log Deleted"});
    }

    return (
        <li className = "collection-item">
            <div>
                <a href = "#edit-log-modal" className = {`modal-trigger ${log.attension ? 'red-text' : 'blue-text'}`} onClick = {() => setCurrent(log)}>{log.message}</a>
                <br/>
                <span className = "grey-text">
                    <span className = "black-text">ID #{log.id}</span> last updated by: <span className = "black-text">{log.tech}</span>
                    {' '}on <Moment format = "MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a className = "secondary-content" href = "#!" onClick = {onDelete}>
                    <i className = "material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null, {deleteLog, setCurrent})(LogItems)

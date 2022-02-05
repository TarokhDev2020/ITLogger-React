import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logActions';
import LogItems from './LogItems';
import Preloader from '../layouts/Preloader';

const Logs = ({log: {logs, loading}, getLogs}) => {

    useEffect(() => {
        getLogs();
    }, [])

    if (loading || logs === null) {
        return <Preloader/>
    }

    return (
        <div>
            <ul className = "collection with-header">
                <li className = "collection-header">
                    <h4 className = "center">System Logs</h4>
                </li>
                {!loading && logs.length === 0 ? <p className = "center">No logs to show...</p> : (
                    logs.map(log => (
                        <LogItems key = {log.id} log = {log} />
                    ))
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {log: state.log}
}

export default connect(mapStateToProps, {getLogs})(Logs);

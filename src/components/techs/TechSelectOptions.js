import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';

const TechSelectOptions = ({tech: {techs, loading}, getTechs}) => {

    useEffect(() => {
        getTechs();
    }, []);

    return (
        !loading && techs !== null && techs.map(tech => (
            <option key = {tech.id} value = {`${tech.firstName} ${tech.lastName}`}>
                {tech.firstName} {tech.lastName}
            </option>
        ))
    )
}

const mapStateToProps = state => {
    return {tech: state.tech}
}

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);

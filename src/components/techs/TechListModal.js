import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';
import TechItems from './TechItems';

const TechListModal = ({getTechs, tech: {techs, loading}}) => {

    useEffect(() => {
        getTechs();
    }, [])

    return (
        <div id = "tech-list-modal" className = "modal">
            <div className = "modal-content">
                <h4>Technicial List</h4>
                <ul className = "collection">
                    {!loading && techs !== null && techs.map(tech => (
                        <TechItems key = {tech.id} tech = {tech}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {tech: state.tech}
};

export default connect(mapStateToProps, {getTechs})(TechListModal);

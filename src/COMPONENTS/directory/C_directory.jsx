import React from 'react';
import MenuItem from '../menu-item/C_menu-item';
import './C_directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../REDUX/directory/directory-selector.js';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))
        }
    </div>
)

const mapStateToProps =createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import MenuItem from '../menu-item/Menu-item';
import {selectDirectorySection} from '../../redux/directory.selectors';

const Directory = ({sections}) => (
            <div className="directory-menu">
                    {sections.map(({id, ...sectionsProps}) => (
                        <MenuItem key={id}
                         {...sectionsProps}
                         />
                    ))}
            </div>
    );

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
});


export default connect(mapStateToProps)(Directory);
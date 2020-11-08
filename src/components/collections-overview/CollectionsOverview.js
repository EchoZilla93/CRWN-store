import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PrevCollection from '../preview-collection/PrevCollection';
import {selectCollections} from '../../redux/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
        collections.map(({id,...otherCollectionProps}) => {
                return (
                    <PrevCollection 
                     key={id} {...otherCollectionProps}
                    />
                    )
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);

import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const BalanceButton = ({ record }) => {
    
    if (!record) {
        return null;
    }

    return (
        <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={{
                pathname: '/balance/view/' + record.id,
            }}
        >
            Balance
        </Button>
    )
};

export const CreateGoalButton = ({ record }) => {
    
    if (!record) {
        return null;
    }

    return (
        <Button
            variant="contained"
            color="primary"
            component={Link}
            to={{
                pathname: '/goals/create',
                state: { record: { file_id: record.id } },
            }}
        >
            Create Goal
        </Button>
    )
};

export const CreateAssetButton = ({ record }) => {
    
    if (!record) {
        return null;
    }

    return (
        <Button
            variant="contained"
            color="primary"
            component={Link}
            to={{
                pathname: '/assets/create',
                state: { record: { file_id: record.id } },
            }}
        >
            Create Asset
        </Button>
    )
};


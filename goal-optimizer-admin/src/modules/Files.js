import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, TabbedForm, FormTab,
        DisabledInput, TextInput, ReferenceManyField, SimpleForm, Create, DateField, NumberField, 
        NumberInput, DateInput, CardActions, Toolbar, SaveButton, Filter } from 'react-admin';

import { CountryField, CountryInput } from '../components/ra-custom/Countries'
import { CurrencyField, CurrencyInput } from '../components/ra-custom/Currencies'

import { GoalSubList } from './Goals';
import { AssetSubList } from './Assets';

import { CreateAssetButton, CreateGoalButton, BalanceButton } from './FilesButton';

const FilesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name__" alwaysOn/>
        <CountryInput source="domicile" alwaysOn/>
    </Filter>
);

export const FilesList = props => (
    <List {...props} filters={<FilesFilter/>} >
        <Datagrid  expand={<ExpandZone />}>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="status" />
            <CountryField source="domicile" />
            <NumberField source="age" />
            <DateField source="horizon" />
            <NumberField source="amount" options={{ style: 'currency', currency: 'USD', currencyDisplay: 'code' }}/>
            <CurrencyField source="currency" />
            <EditButton />
            <BalanceButton />
        </Datagrid>
    </List>
);

const ExpandZone = (props) => {
    const str = JSON.stringify(props);
    return (
        <div>
            <h1>Data</h1>
            <p>{str}</p>
        </div>       
    )
}

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const FileEditActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <CreateAssetButton record={data}/>
        &nbsp;
        <CreateGoalButton record={data}/>
        &nbsp;
        <BalanceButton record={data} />
    </CardActions>
);

const FileEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const FileEdit = props => (
    <Edit {...props} actions={<FileEditActions />}>
        <TabbedForm toolbar={<FileEditToolbar/>}>
            <FormTab label="Details">
                <DisabledInput source="id" />
                <span>
                    <TextInput source="name" />
                    &nbsp;
                    <CountryInput source="domicile" />
                </span>
                
                <NumberInput source="age" />
                <span>
                    <NumberInput source="amount" />
                    &nbsp;
                    <CurrencyInput source="currency" />
                    &nbsp;
                    <DateInput source="horizon" />
                </span>
            </FormTab>
            <FormTab label="Goals">
                <ReferenceManyField
                    addLabel={false}
                    reference="goals"
                    target="file_id"
                >
                    <GoalSubList /> 
                </ReferenceManyField>
            </FormTab>
            <FormTab label="Assets">
                <ReferenceManyField
                    addLabel={false}
                    reference="assets"
                    target="file_id"
                >
                    <AssetSubList />
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const FileCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <span>
                <TextInput source="name" />
                &nbsp;
                <CountryInput source="domicile" />
            </span>
            
            <NumberInput source="age" />

            <span>
                <NumberInput source="amount" />
                &nbsp;
                <CurrencyInput source="currency" />
                &nbsp;
                <DateInput source="horizon" />
            </span>
            
        </SimpleForm>
    </Create>
);
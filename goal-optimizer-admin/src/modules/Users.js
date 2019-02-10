import React from 'react';
import { List, Datagrid, TextField, EmailField, ReferenceField, Edit, 
        DisabledInput, Create, SimpleForm, ReferenceInput, SelectInput, TextInput, EditButton,
        TabbedForm, FormTab, Filter, NumberField, NumberInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name__" />
        <ReferenceInput label="Company" source="company_id" reference="companies" allowEmpty alwaysOn>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <List {...props} filters={<UserFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="age" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <ReferenceField source="company_id" reference="companies">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Details">
                <DisabledInput source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="phone" />
                <NumberInput source="age" />
            </FormTab>
            <FormTab label="Company">
            <ReferenceInput source="company_id" reference="companies">
                <SelectInput optionText="name" />
            </ReferenceInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="company_id" reference="companies">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <NumberInput source="age" />
        </SimpleForm>
    </Create>
);
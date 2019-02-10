import React from 'react';
import { List, Datagrid, TextField, UrlField, EditButton, Edit, EmailField, TabbedForm, FormTab,
        DisabledInput, TextInput, ReferenceManyField, SimpleForm, Create } from 'react-admin';

export const CompaniesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <UrlField source="website" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CompanyEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Details">
                <DisabledInput source="id" />
                <TextInput source="name" />
                <TextInput source="website" />
            </FormTab>
            <FormTab label="Users">
                <ReferenceManyField
                    addLabel={false}
                    reference="users"
                    target="company_id"
                >
                    <Datagrid>
                    <TextField source="id" />
                        <TextField source="name" />
                        <EmailField source="email" />
                        <TextField source="phone" />
                        <EditButton style={{ padding: 0 }} />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CompanyCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="website" />
        </SimpleForm>
    </Create>
);
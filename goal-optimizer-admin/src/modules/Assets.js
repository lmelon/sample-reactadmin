import React from 'react';
import { Datagrid, TextField, NumberField, Edit, 
        DisabledInput, Create, SelectField, ReferenceInput, SelectInput, TextInput, EditButton,
        TabbedForm, FormTab, NumberInput, CloneButton } from 'react-admin';

const choicesRecurrence = [
    { id: "M", name: "Monthly" },
    { id: "Y", name: "Yearly" },
    { id: null, name: "None" },
];

export const AssetSubList = props => (
    <Datagrid {...props}>
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="amount" />
        <SelectField source="recurrence" choices={choicesRecurrence}/>
        <EditButton style={{ padding: 0 }} />
        <CloneButton />
    </Datagrid>
);

const redirect = (basePath, id, data) => `/files/${data.file_id}/2`;

export const AssetEdit = props => (
    <Edit {...props}>
        <TabbedForm redirect={redirect}>
            <FormTab label="Details">
                <span>
                    <ReferenceInput source="file_id" reference="files">
                        <SelectInput source="name" label="File id" options={{ disabled:true }}/>
                    </ReferenceInput>
                    &nbsp;
                    <DisabledInput source="id" label="Asset id"/>
                </span>
                
                <span>
                    <TextInput source="name" />
                </span>
                
                <span>
                    <NumberInput source="amount" />
                    &nbsp;
                    <SelectInput source="recurrence" choices={choicesRecurrence}/>
                </span>

            </FormTab>
        </TabbedForm>
    </Edit>
);

export const AssetCreate = props => (
    <Create {...props}>
        <TabbedForm redirect={redirect}>
            <FormTab label="Details">

                <ReferenceInput source="file_id" reference="files">
                    <SelectInput source="name" label="File id" options={{ disabled:true }}/>
                </ReferenceInput>
                
                <span>
                    <TextInput source="name" />
                </span>
                
                <span>
                    <NumberInput source="amount" />
                    &nbsp;
                    <SelectInput source="recurrence" choices={choicesRecurrence}/>
                </span>
            
            </FormTab>
        </TabbedForm>
    </Create>
);

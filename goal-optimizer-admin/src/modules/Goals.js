import React from 'react';
import { Datagrid, TextField, NumberField, Edit, 
        DisabledInput, Create, SelectField, ReferenceInput, SelectInput, TextInput, EditButton,
        TabbedForm, FormTab, DateInput, NumberInput, DateField, CloneButton } from 'react-admin';

const choicesPriority = [
    { id: "HIGH", name: "High" },
    { id: "MED", name: "Medium" },
    { id: "LOW", name: "Low" },
];

const choicesRecurrence = [
    { id: "M", name: "Monthly" },
    { id: "Y", name: "Yearly" },
    { id: null, name: "None" },
];

const choicesType = [
    { id: "ESSENTIAL", name: "Essential" },
    { id: "ASPI", name: "Aspirational" },
];

export const GoalSubList = props => (
    <Datagrid {...props} expand={<Hello />}>
        <TextField source="id" />
        <TextField source="name" />
        <SelectField source="priority" choices={choicesPriority}/>
        <SelectField source="type" choices={choicesType}/>
        <NumberField source="amount" />
        <SelectField source="recurrence" choices={choicesRecurrence}/>
        <DateField source="from" />
        <DateField source="to" />
        <EditButton style={{ padding: 0 }} />
        <CloneButton />
    </Datagrid>
);

const Hello = (props) => {

    const str = JSON.stringify(props);

    return (
        <div>
            <h1>Data</h1>
            <p>{str}</p>
        </div>
        
    )
}

const redirect = (basePath, id, data) => `/files/${data.file_id}/1`;

export const GoalEdit = props => (
    <Edit {...props}>
        <TabbedForm redirect={redirect}>
            <FormTab label="Details">
                <span>
                    <ReferenceInput source="file_id" reference="files">
                        <SelectInput source="name" label="File id" options={{ disabled:true }}/>
                    </ReferenceInput>
                    &nbsp;
                    <DisabledInput source="id" label="Goal id"/>
                </span>
                
                <span>
                    <TextInput source="name" />
                    &nbsp;
                    <SelectInput source="priority" choices={choicesPriority}/>
                    &nbsp;
                    <SelectInput source="type" choices={choicesType}/>
                </span>
                
                <span>
                    <NumberInput source="amount" />
                    &nbsp;
                    <SelectInput source="recurrence" choices={choicesRecurrence}/>
                </span>
            
                <span>
                    <DateInput source="to" />
                    &nbsp;
                    <DateInput source="from" />
                </span>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const GoalCreate = props => (
    <Create {...props}>
        <TabbedForm redirect={redirect}>
            <FormTab label="Details">

                <ReferenceInput source="file_id" reference="files">
                    <SelectInput source="name" label="File id" options={{ disabled:true }}/>
                </ReferenceInput>
                
                <span>
                    <TextInput source="name" />
                    &nbsp;
                    <SelectInput source="priority" choices={choicesPriority}/>
                    &nbsp;
                    <SelectInput source="type" choices={choicesType}/>
                </span>
                
                <span>
                    <NumberInput source="amount" />
                    &nbsp;
                    <SelectInput source="recurrence" choices={choicesRecurrence}/>
                </span>
            
                <span>
                    <DateInput source="to" />
                    &nbsp;
                    <DateInput source="from" />
                </span>
            </FormTab>
        </TabbedForm>
    </Create>
);

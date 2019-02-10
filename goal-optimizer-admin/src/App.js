import React from 'react';
import { Admin, Resource } from 'react-admin';

// ----- UI
//import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import CompanyIcon from '@material-ui/icons/Work';
import FileIcon from '@material-ui/icons/FolderShared';

// ----- Modules
import { UserList, UserEdit, UserCreate } from './modules/Users'
import { CompaniesList, CompanyEdit, CompanyCreate } from './modules/Companies'
import { FilesList, FileEdit, FileCreate } from './modules/Files'
import { GoalEdit, GoalCreate } from './modules/Goals'
import { AssetEdit, AssetCreate } from './modules/Assets'
//import Dashboard from './modules/Home'

// ----- Components
import authProvider from './components/AuthProvider'
import dataProvider from './components/DataProvider'

// ----- Routes
import customRoutes from './AppRoutes';
//import AppLayout from './AppLayout.js';

// ---- Theme
// import { createMuiTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// const theme = createMuiTheme({
//   palette: {
//     primary: blue,
//     //type: 'light', // Switching the dark mode on is a single property value change.
//   },
// });

// ---- App
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}
         customRoutes={customRoutes}>
      <Resource name="users" options={{ label: 'Users' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
      <Resource name="companies" options={{ label: 'Companies' }} list={CompaniesList} edit={CompanyEdit} create={CompanyCreate} icon={CompanyIcon}/>
      <Resource name="files" options={{ label: 'Files' }} list={FilesList} edit={FileEdit} create={FileCreate} icon={FileIcon}/>
      <Resource name="goals" edit={GoalEdit} create={GoalCreate}/>
      <Resource name="assets" edit={AssetEdit} create={AssetCreate}/>
  </Admin>
);

export default App;


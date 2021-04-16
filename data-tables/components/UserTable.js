import React, { forwardRef, useState, useEffect } from 'react'

import MaterialTable from 'material-table'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from '../styles/Home.module.css'

import { CSVLink } from 'react-csv'

import { useQuery } from 'react-query'

import PropagateLoader from 'react-spinners/PropagateLoader'

// Icons were not importing with NextJS. Did workaround to get it to work. Need to investigate further.
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

// TODO use env variables to detect when deployed versus local and point to deployed API
// TODO consider refactoring server to use NextJS built in API creation
const apiUri = 'http://localhost:4000/api/users'

const UserTable = () => {
  const [accounts, setAccounts] = useState([])

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(apiUri)
      .then((res) => res.json())
      .then((data) => {
        setAccounts(data?.data)
      })
  )

  if (isLoading)
    return (
      <React.Fragment>
        <div className={styles.LoadingContainer}>
          <PropagateLoader></PropagateLoader>
        </div>
        <div className={styles.LoadingContainer}>
          <Typography variant='h6'>Loading data, please wait....</Typography>
        </div>
      </React.Fragment>
    )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <React.Fragment>
      <div className={styles.TableContainer}>
        <MaterialTable
          columns={[
            {
              title: 'First Name',
              field: 'First Name',
              sorting: false,
              filtering: false,
            },
            {
              title: 'Last Name',
              field: 'Last Name',
              sorting: false,
              filtering: false,
            },
            {
              title: 'Country',
              field: 'Country',
              sorting: false,
              search: false,
            },
            {
              title: 'Email',
              field: 'email',
              sorting: false,
              filtering: false,
              search: false,
            },
            {
              title: 'dob',
              field: 'dob',
              sorting: false,
              filtering: false,
              search: false,
            },
            { title: 'mfa', field: 'mfa', sorting: false, search: false },
            { title: 'amt', field: 'amt', filtering: false, search: false },
            {
              title: 'createdDate',
              field: 'createdDate',
              filtering: false,
              search: false,
            },
            {
              title: 'ReferredBy',
              field: 'ReferredBy',
              filtering: false,
              search: false,
            },
          ]}
          data={accounts}
          options={{
            filtering: true,
            search: true,
          }}
          title='Users'
          icons={tableIcons}
        />
        <div className={styles.ButtonContainer}>
          <Button variant='contained' color='primary'>
            <CSVLink data={accounts}>Download as CSV</CSVLink>
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserTable

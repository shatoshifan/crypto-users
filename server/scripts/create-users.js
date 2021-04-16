const { accounts } = require('./accounts')
const fetch = require('node-fetch')

const createUsers = async (accountsData) => {
  console.log('*** Starting createUsers... ***')
  // console.log({ accountsData })

  let counter = 0

  while (counter < accounts.length) {
    fetch('http://localhost:4000/api/user', {
      method: 'post',
      body: JSON.stringify(accounts[counter]),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))

    counter++
  }
}

const getUsers = async () => {
  fetch('http://localhost:4000/api/users')
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const countUsers = (accountsData = []) => {
  console.log('length: ', accountsData.length)
}

//createUsers(accounts)
// getUsers()

countUsers(accounts)

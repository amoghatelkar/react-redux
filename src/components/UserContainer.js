import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({userData,fetchUsers}) {
  useEffect(() => {
    fetchUsers()
  },[fetchUsers])
  return userData.loading ? (<h2>Loading</h2>) : userData.error ? (<h2>{userData.error}</h2>) :
    (
      <div>
        <h2>User Details : </h2>
        {userData && userData.data && userData.data.map(user => 
          <p>{user.name}</p>
        )}
      </div>
    )
  
}

const mapStateToProps = state => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
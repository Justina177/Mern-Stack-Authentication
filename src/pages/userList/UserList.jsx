import React from 'react';
import PageMenu from '../../components/pageMenu/PageMenu';
import UserStats from '../../components/userStart/UserStats';
import './UserList.scss'

const UserList = () => {
  return (
    <section>
        <div className="container">
        <PageMenu />
        <UserStats />
        
        </div>

    </section>
  )
}

export default UserList
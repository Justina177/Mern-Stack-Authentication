import React from 'react';
import PageMenu from '../../components/pageMenu/PageMenu';
import UserStats from '../../components/userStart/UserStats';
import Search from './search/Search';
import './UserList.scss'

const UserList = () => {
  return (
    <section>
        <div className="container">
        <PageMenu />
        <UserStats />

        <div className="user-list">
            <div className="--flex-between">
            <span>
                <h3>All Users</h3>
            </span>
            <span>
                <Search />
            </span>

            </div>

        </div>

        </div>

    </section>
  )
}

export default UserList
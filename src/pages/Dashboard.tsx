import React from 'react'
import LastestTransactions from '../components/Dashboard/LastestTransactions'
import NewJoinMember from '../components/Dashboard/NewJoinMember'
import Trend from '../components/Dashboard/Trend'
import UserAnalytics from '../components/Dashboard/UserAnalytics'
import Layout from './Layout'

const Dashboard = () => {
  return (
    <Layout>
      <Trend />
      <UserAnalytics />
      <div className="flex flex-row mt-4 gap-4">
        <NewJoinMember />
        <LastestTransactions />
      </div>
    </Layout>
  )
}

export default Dashboard

import React from 'react'
import TotalBalanceBoxProps from '../types/'
import { formatAmount } from '@/lib/utils'
import CountUp from 'react-countup'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">

      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Total Balance</h2>
        <div className="flex flex-col gap-2">
          <h2 className="header-2">
            Wallets: {totalBanks}
          </h2>
          <h2 className="header-2">
            Total Current Balance: {totalCurrentBalance}
          </h2>
          <div className="flex flex-col gap-2">
            <p className="total-balance-label">
              Total Current Balance
            </p>

            <p className="total-balance-amount flex-center gap-2">
              <CountUp end={100} />

              {formatAmount(totalCurrentBalance)}
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
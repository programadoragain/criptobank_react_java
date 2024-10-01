import React from 'react'
import HeaderBox from './components/HeaderBox';
import TotalBalanceBox from './components/TotalBalanceBox';

function Home() {
const loggedIn = { firstName: 'John' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome to Criptobank"
            user={loggedIn?.firstName || 'Guest'}
            description="Let's start holding your crypto!"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalBalance={1}
            totalCurrentBalance={1250.5}
          />
        </header>
      </div>
    </section>
  )
}

export default Home;

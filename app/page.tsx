import React from 'react'
import HeaderBox from './components/ui/HeaderBox';

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
        </header>
      </div>
    </section>
  )
}

export default Home;

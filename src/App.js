import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Logo from './components/Logo'
import ProjectAd from './components/ProjectAd'
import SearchBar from './components/SearchBar'
import AdBanner from './components/AdBanner'
import Widgets from './components/Widgets'
import WidgetsNews from './components/WidgetsNews'

/**
 * Global container of the page
 */
function App() {
  const fakeNews = [
    { icon: 'campaign', title: 'Cows lose their jobs as milk prices drop' },
    {
      icon: 'campaign',
      title: 'Forecasters call for weather on Monday',
    },
    { icon: 'bug_report', title: 'Miracle cure kills fifth patient' },
    { icon: 'cancel', title: 'Thursday is cancelled' },
    {
      icon: 'campaign',
      title: 'Breathing oxygen linked to staying alive',
    },
  ]

  return (
    <div className="container-fluid p-3" style={{ width: '95%' }}>
      <div className="row">
        <div className="col-md align-self-center text-right mb-5 pb-5">
          <Logo />
        </div>
        <div className="col-md-10 px-0">
          <WidgetsNews data={fakeNews}>
            <ProjectAd />
          </WidgetsNews>
          <SearchBar />
          <AdBanner />
          <Widgets data={fakeNews} />
        </div>
      </div>
    </div>
  )
}

export default App

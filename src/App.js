import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Logo from './components/Logo'
import Tabs from './components/Tabs'
import List from './components/List'
import Stocks from './components/Stocks'
import HeadingLink from './components/HeadingLink'
import ProjectAd from './components/ProjectAd'
import SearchBar from './components/SearchBar'
import AdBanner from './components/AdBanner'
import WeatherWidget from './components/WeatherWidget'

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
    { icon: 'campaign', title: 'Breathing oxygen linked to staying alive' },
  ]

  return (
    <div className="container-fluid p-3" style={{ width: '95%' }}>
      <div className="row">
        <div className="col-md align-self-center text-right mb-5 pb-5">
          <Logo />
        </div>
        <div className="col-md-10 px-0">
          <div className="row">
            <div className="col-7 px-0 mr-5">
              <Tabs fakeNews={fakeNews}>
                <div className="text-secondary mb-0 pt-3">Date & Time</div>
              </Tabs>
              <div className="border border-muted mr-0">
                <Stocks>
                  <div className="col-1 text-secondary">
                    <button>...</button>
                  </div>
                </Stocks>
              </div>
            </div>
            <ProjectAd />
          </div>
          <div className="row">
            <div className="col px-0 mt-3">
              <SearchBar />
              <AdBanner />
            </div>
          </div>
          <div className="row">
            <div className="col-4 px-0">
              <WeatherWidget />
              <HeadingLink url="#">Popular</HeadingLink>
              <List
                arr={fakeNews.slice(1, 4)}
                classUL="list-unstyled"
                showIcons={false}
              />
            </div>
            <div className="col-4 px-0">
              <HeadingLink url="#">Local Map</HeadingLink>
              <p>Public transport schedule</p>
              <div className="row">
                <div className="col pt-2">
                  <HeadingLink url="#">TV Guide</HeadingLink>
                </div>
                <div className="col">
                  <button className="badge badge-info btn-sm">
                    Watch Live
                  </button>
                </div>
              </div>
              <List
                arr={fakeNews.slice(2)}
                classUL="list-unstyled"
                showIcons={false}
              />
            </div>
            <div className="col-4 px-0">
              <HeadingLink url="#">Now Streaming</HeadingLink>
              <List
                arr={fakeNews.slice(0, 3)}
                classUL="ml-n2 list-unstyled"
                showIcons={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

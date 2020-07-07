import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

/**
 * Global container of the page
 */
function App() {
  return (
    <div className="container-fluid p-3" style={{ width: '95%' }}>
      <div className="row">
        <div className="col-md align-self-center text-right">
          <h1 className="mr-3">
            <span className="text-info">L</span>ogogo
          </h1>
        </div>
        <div className="col-md-10 px-0">
          <div className="row">
            <div className="col-7 bg-light border border-secondary px-0 mr-5">
              <div className="row">
                <h2 className="col-3 text-info">Breaking News</h2>
                <h2 className="col-3 text-primary">Local News</h2>
                <h2 className="col-3 text-primary">Recommended</h2>
                <div className="col-3 text-secondary">Date & Time</div>
              </div>
              <div className="bg-light border border-info mx-0 pr-5">
                <ul className="ml-n5 pl-5">
                  <li className="d-block">News</li>
                  <li className="d-block">News</li>
                  <li className="d-block">News</li>
                  <li className="d-block">News</li>
                  <li className="d-block">News</li>
                </ul>
              </div>
              <div className="border border-muted mr-n5">
                <div className="row">
                  <div className="col">USD</div>
                  <div className="col">EUR</div>
                  <div className="col">Oil</div>
                  <div className="col-1 text-secondary">...</div>
                </div>
              </div>
            </div>
            <div
              className="col-4 bg-light border border-secondary
             align-self-end pr-0 ml-3 mb-2">
              <div>Project Ad Image</div>
              <h2 className="text-info">Title</h2>
              <div>Description</div>
            </div>
          </div>
          <div className="row">
            <div className="col px-0">
              <div
                className="bg-light border border-secondary text-info"
                style={{ width: '70%' }}>
                Links
              </div>
              <div
                className="border border-success"
                style={{ width: '90%' }}
                role="search">
                <input type="text" name="search" className="search-input" />
                <button className="btn btn-info" style={{ width: '10%' }}>
                  Search
                </button>
              </div>
              <div className="w-50 bg-light border border-secondary">
                Example
              </div>
              <div
                className="bg-info border border-secondary my-3"
                style={{ width: '80%' }}>
                Banner
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 px-0">
              <h2 className="text-info pt-2">Weather</h2>
              <div className="row">
                <div className="col">+17</div>
                <div className="col">Forecast</div>
              </div>
              <h2 className="text-info pt-2">Popular</h2>
              <ul className="pl-0">
                <li className="d-block">1</li>
                <li className="d-block">2</li>
                <li className="d-block">3</li>
              </ul>
            </div>
            <div className="col-4 px-0">
              <h2 className="text-info pt-2">Local Map</h2>
              <p>Public transport schedule</p>
              <h2 className="text-info pt-2">TV Guide</h2>
              <ul className="pl-0">
                <li className="d-block">1</li>
                <li className="d-block">2</li>
                <li className="d-block">3</li>
              </ul>
            </div>
            <div className="col-4 px-0">
              <h2 className="text-info pt-2">Live TV</h2>
              <ul className="pl-0">
                <li className="d-block">1</li>
                <li className="d-block">2</li>
                <li className="d-block">3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

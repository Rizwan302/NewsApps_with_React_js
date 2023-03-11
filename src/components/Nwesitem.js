import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Nwesitem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    let {title, description, img, newsurl, pubDate, creator} = this.props
    return (
        <>
        {/* // <div className="row row-cols-1 row-cols-md-3 g-4"> */}
        
        <div className="col card-group">
          
          <div className="card h-100">
            <img src={!img?"https://www.ggchamber.org/wp-content/uploads/2013/04/badge-ad.jpg":img} className="card-img-top" height="271px" alt="..."/>
            <div className="card-body">
            <button type="button" class="btn float-start btn-primary position-relative" style={{zIndex:1, top
            :'-85px', width:'100px',backgroundColor:'red',}}>
                {!creator?"Undefind":creator}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                </span>
              </button>
              {/* <br></br> */}
              <h5 className="card-title text-start">{title}</h5>
              <p className="card-text text-start">{description} ...</p>
              <p className="card-text text-start"><small className="text-muted">Last updated {pubDate}</small></p>
              <a href={newsurl} className="btn btn-primary float-start" style={{width:'120px'}}>Read Me &rarr;</a>
              

            </div>
            
          </div>
        </div>
        
    {/* //   </div> */}
    </>
    )
  }
}

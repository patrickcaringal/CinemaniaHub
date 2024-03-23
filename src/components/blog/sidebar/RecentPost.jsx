import React, { Fragment, memo } from 'react'

//react-router-dom
import { Link } from 'react-router-dom'

//static data
import { blogRecent } from '../../../StaticData/blogs'

const RecentPost = memo(() => {

  return (
      <Fragment>
      <div className="widget iq-widget-blog">
          <h5 className="widget-title position-relative">Recent Post</h5>
            <ul className="list-inline p-0 m-0">
            
            {blogRecent.length === 0
                ? shimmerData.map((item, index) => (
                    <RecentShimmer key={index} />
                  ))
            :blogRecent.map((item, index) => {
              return (
                <li key={index} className='d-flex align-items-center gap-4'>
                  <div className="img-holder">
                    
                      <Link to='/blogs-detail'>
                        <img src={item.thumbnail} className="img-fluid h-100 w-100 object-cover" alt="" loading="lazy" /></Link>
                  </div>
                  <div className="post-blog">
                        <Link to='/blogs-detail' className='new-link'>
                          <h6 className='post-title'>{item.title}</h6>
                        </Link>
                          <ul className="list-inline mb-2">
                            <li clas="list-inline-item border-0 mb-0 pb-0">
                              <Link className="blog-data" to="#">
                                <i className="fa fa-calendar-alt me-1" aria-hidden="true"></i>{item.blogDate}</Link>
                            </li>
                          </ul>
                      </div>
                </li>
              )
            })
              }
            </ul>
          </div>
    </Fragment>
  )
})

RecentPost.displayName="RecentPost"
export default RecentPost
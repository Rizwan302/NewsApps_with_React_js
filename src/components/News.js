import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nwesitem from './Nwesitem';
import Spinner from './Spinner';


export default class News extends Component {
  static propTypes = {
    country: 'in',
    pageSize: 6,
    category: 'science',
    language: 'en'
  }
  static defaulProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    language: PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
      results : [],
      loding : false,
      page : 1

    }
  }

  async updata(){
    const urls =`https://newsdata.io/api/1/news?apikey=pub_1846450daa37f652e74e192cecd3ce9a56dee&q=page=${this.state.page}&language=${this.props.language}&country=${this.props.country}&language=${this.props.language}&category=${this.props.category}`;
    // 730ea5a9176348cfa7aaca88d109904d
    this.setState({loding: true})
    let data = await fetch(urls);
    let pradata = await data.json()
    console.log(pradata)
    this.setState({results: pradata.results,
    loding: false})
  }

  async componentDidMount(){
    // let urls =`https://newsdata.io/api/1/news?apikey=pub_1846450daa37f652e74e192cecd3ce9a56dee&language=${this.props.language}&country=${this.props.country}&language=${this.props.language}&category=${this.props.category}`;
    // // 730ea5a9176348cfa7aaca88d109904d
    // this.setState({loding: true})
    // let data = await fetch(urls);
    // let pradata = await data.json()
    // console.log(pradata)
    // this.setState({results: pradata.results,
    // loding: false})
    this.updata();
  }

  hendelprevesClick = async () =>{
    // let urls = `https://newsdata.io/api/1/news?apikey=pub_1846450daa37f652e74e192cecd3ce9a56dee&q=pega=${this.state.page - 1}`
    // this.setState({loding: true})
    // // &pageSize=${this.props.pageSize}
    // let data = await fetch(urls);
    // let pradata = await data.json()
    // this.setState({
    //   page : this.state.page - 1,
    //   results: pradata.results,
    //   totalResults: 25,
    //   loding: false
    // })
    this.setState({pageSize: this.state.pageSize - 1});
    this.updata();


  }


  hendelnextClick = async () =>{
    // if(!(this.state.page + 1> Math.ceil(this.state.totalResults/25))){
    //     let urls = `https://newsdata.io/api/1/news?apikey=pub_1846450daa37f652e74e192cecd3ce9a56dee&q=pega=${this.state.page + 1}`
    //     // &pageSize=${this.props.pageSize}
    //     this.setState({loding: true})
    //     let data = await fetch(urls);
    //     let pradata = await data.json()
    //     this.setState({loding: false})
    //     this.setState({
    //     page : this.state.page + 1,
    //     results: pradata.results
    //     })
    // }   
    console.log('next')
    this.setState({pageSize: this.state.pageSize + 1});
    this.updata();


  }

  render() {
    return (
        <>
        {this.state.loding && <Spinner/>}
      <div className='container my-3'>

        <div className="row">
        {!this.state.loding && this.state.results.map((element)=>{
              // console.log(element.lenght)
              return <div className='col-md-4' key={element.link}>
              <Nwesitem title={element.title?element.title.slice(0, 40): ""} description={element.description?element.description.slice(0, 60): ""} img={element.image_url} newsurl={element.link} pubDate={element.pubDate} creator={element.creator}/>
          
              </div>
        })} 
        </div>
        </div>
        <div  className="d-flex justify-content-between container">
        <button disabled={this.state.page<=1} onClick={this.hendelprevesClick} class="">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            &larr; Preves
        </span>
        </button>
   
        <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/25)} onClick={this.hendelnextClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Next &rarr;
        </span>
        </button>
        </div>
        </>
    )
  }
}

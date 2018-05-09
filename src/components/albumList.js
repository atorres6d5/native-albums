import React , { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import AlbumDetail from './albumDetail.js'
import axios from 'axios'

class AlbumList extends Component{
  constructor(props){
    super(props)
    this.state={
      albums:[]
    }
  }

  componentDidMount(){
    this.getMusicData()
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(result=>{
    //   console.log(result.data);
    //   this.setState({albums:result.data})
    // })
  }

  getMusicData = async () => {
    await  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }))
    .catch(err=>{console.log(err)})
  }

  renderAlbums(){
    console.log(this.state.albums, "renderAlbums")
    return this.state.albums.map(album=>{
      // return <Text>album:{album.title}</Text>
      return <AlbumDetail key={album.url} album={album} />
    })
  }

  render(){
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList

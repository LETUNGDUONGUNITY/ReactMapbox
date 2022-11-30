import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibGV0dW5nZHVvbmc5OSIsImEiOiJjbGIzZG4wdDUwNGM5M3Bxa3Bub2c0c2N5In0.Dys7oI__GusDK5oM5a7EmQ';

export default class App extends Component {
  componentDidMount=()=>{ 
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
  }
  
  constructor(props) {
    super(props);
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 9
    };
    this.mapContainer = React.createRef();
    this.render=()=>{
      return (
        <div>
        <div ref={this.mapContainer} className="map-container" />
        </div>
        );
    }
    
    }
  
}

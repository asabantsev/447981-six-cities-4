import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class MapProperty extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const {currentOffer, offers} = this.props;

    const position = currentOffer.coords;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: position,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(position, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    leaflet
      .marker(currentOffer.coords, {icon: activeIcon})
      .addTo(map);

    offers.map((offer) => {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section className="property__map map" ref={this._mapRef}>
      </section>
    );
  }
}

MapProperty.propTypes = {
  currentOffer: PropTypes.shape({
    coords: PropTypes.array.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coords: PropTypes.array.isRequired,
      })
  ).isRequired,
};


export default MapProperty;

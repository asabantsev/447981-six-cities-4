import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const {offers} = this.props;

    offers.map((offer) => {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map" ref={this._mapRef}>
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coords: PropTypes.array.isRequired,
      })
  ).isRequired,
};

export default Map;

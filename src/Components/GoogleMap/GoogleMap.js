import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import _ from 'lodash'

const mapStyles = {
  width: '100%',
  height: '100%'
};

function MapContainer ({google, locationName}) {
    let [markerData, setMarkerData] = useState([]);
    let [mapObj, setMapObj] = useState()

    if (mapObj) {
        const service = new google.maps.places.PlacesService(mapObj);
        const request = {
            query: locationName,
            fields: ['name', 'geometry', 'formatted_address'],
        };
        service.findPlaceFromQuery(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                let queryResults = []
                for (var i = 0; i < results.length; i++) {
                    queryResults.push(results[i]);
                }
                if (!_.isEqual(queryResults, markerData)) {
                    setMarkerData(queryResults)
                    mapObj.setCenter(results[0].geometry.location);
                }
            }
        });
    }

    return (
        <div onWheel={(e) => e.stopPropagation()}>
            <Map
                locationName={locationName}
                google={google}
                onReady={(mapProps, map) => setMapObj(map)}
                zoom={14}
                style={mapStyles}
            >
                {
                    markerData.map((d, i) =>
                        <Marker
                            key={`marker-${i}-${Math.floor(Math.random()*100000)}`}
                            title={d.formatted_address}
                            name={d.name}
                            position={{lat: d.geometry.location.lat(), lng: d.geometry.location.lng()}}
                        />
                    )
                }
            </Map>
        </div>
    );
}

const GoogleMap = React.memo(
    GoogleApiWrapper({
        apiKey: process.env.REACT_APP_PLACES_API_KEY
    })(MapContainer)
)

export default GoogleMap;


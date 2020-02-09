import React, { useState } from 'react'
import Autocomplete from '../Autocomplete'
import GoogleMap from '../GoogleMap'
import InfoBox from '../InfoBox'
import { mapViewFlexboxStyle, autocompleteContainer_Style } from './styles'

export default function () {
    const [locationName, setLocationName] = useState("Blooming Pixel Creatives")
    const [locationInfo, setLocationInfo] = useState({})
    const handleSelectionChange = (newSelection) => {
        setLocationName(newSelection.description)
        setLocationInfo(newSelection)
    }
    return (
        <React.Fragment>
            <div style={{...mapViewFlexboxStyle, background: '#fff'}}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: '1px solid rgba(0,0,0,0.2)',
                    padding: '0 2.5% 0 2.5%',
                }}>

                    <div className="logo-box" style={{flex: 0.2, display: 'none'}} />

                    <div style={{...autocompleteContainer_Style, marginTop: '10%', flex: .1}}>
                        <Autocomplete
                            themeClass={"light loc-browser"}
                            onSelectionChange={handleSelectionChange}
                        />
                    </div>

                    <div className='infoBox' style={{flex: .85}}>
                        <InfoBox info={locationInfo} />
                    </div>

                </div>

                <div style={{
                    flex: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>

                    <div style={{flex: 0}} />
                    <div style={{flex: 8, position: 'relative', height: '100%'}}>
                        <GoogleMap locationName={locationName} />
                    </div>
                    <div style={{flex: 0}} />
                </div>
            </div>
        </React.Fragment>
    )
}

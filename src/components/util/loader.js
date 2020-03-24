import React from 'react';
import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const LoaderContext = React.createContext();

export default class AppLoaderWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        }
    }
    
    showLoader = () => this.setState({ loading: true });

    hideLoader = () => this.setState({ loading: false });

    render() {
        const { loading } = this.state
        const funcs = {
            showLoader: this.showLoader,
            hideLoader: this.hideLoader
        };
        
        return (
            <LoaderContext.Provider value={funcs}>
                {this.props.children}
                {
                    loading && <div className="overlay">
                        <Loader
                            style={{marginTop: '33vh'}}
                            type="Puff"
                            color="#F55D3B"
                            height={100}
                            width={100}
                        />
                    </div>
                }
            </LoaderContext.Provider>
        );

    }
}

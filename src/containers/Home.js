import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './../App.css';
import CustomNavbar from './../components/CustomNavbar'
import Handler from './../kooper/kooper'
import CustomCarousel from './../components/CustomCarousel'
import { Redirect } from 'react-router-dom';

class Home extends Component {
    CustomNavbar

    constructor() {
        super();

        this.changeRouteHandler = this.changeRouteHandler.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.carouselOnOffHandler = this.carouselOnOffHandler.bind(this);
        this.state = {
            classes: "container-test white",
            handler: Handler(),
            showCarousel : false,
            goToTesto: false
        }
    }

    componentDidMount() {
        this.state.handler.registerColorHandler(this.changeColorHandler);
        this.state.handler.registerCarouselOnOffHandler(this.carouselOnOffHandler);
        this.state.handler.registerChangeRouteHandler(this.changeRouteHandler);
    }

    componentWillUnmount() {
        this.state.handler.unregisterColorHandler();
        this.state.handler.unregisterCarouselOnOffHandler();
        this.state.handler.unregisterChangeRouteHandler();
    }

    
    changeRouteHandler(data) {
        console.log("-------> ", data);
        if(data.goToTesto) {
            this.setState({
                goToTesto : true
            });
        }
    }

    carouselOnOffHandler(data) {

        console.log(data);
       
        // non viene inviato il sinonimo ma il termine principale
        if (data.what === "apri") {
            if(this.state.showCarousel === false) {
                this.setState( {showCarousel: true} );
            }
        }

        if (data.what === "chiudi") {
            if(this.state.showCarousel === true) {
                this.setState( {showCarousel: false} );
            }
        }
        
    }

    changeColorHandler(data) {


        console.log(data);

        switch (data.colore) {

            case "rosso":
                this.setState({
                    classes: "container-test red"
                });
                break;

            case "verde":
                this.setState({
                    classes: "container-test green"
                });
                break;

            case "blu":
                this.setState({
                    classes: "container-test blue"
                });
                break;

            case "arancione":
            case "arancio": // arancio sarebbe inutile, perché non viene inviato il sinonimo ma il nome principale di riferimento
                this.setState({
                    classes: "container-test orange"
                });
                break;

            case "viola":
                this.setState({
                    classes: "container-test purple"
                });
                break;

            case "rosa":
                this.setState({
                    classes: "container-test pink"
                });
                break;

            case "giallo":
                this.setState({
                    classes: "container-test yellow"
                });
                break;

            case "marrone":
                this.setState({
                    classes: "container-test brown"
                });
                break;

            case "grigio":
                this.setState({
                    classes: "container-test grey"
                });
                break;

            case "nero":
                this.setState({
                    classes: "container-test black"
                });
                break;

            case "bianco":
            default:
                this.setState({
                    classes: "container-test white"
                });
                break;

        }




    }

    render() {
        return (
            <div>
                {(this.state.goToTesto) ? <Redirect to="/testo"/> : <strong></strong>}
                <CustomNavbar className="navbar" />
                <Container fluid={true} className={this.state.classes}>
                    
                    {
                        (this.state.showCarousel)
                        
                        ?

                            <Row>
                                <Col xs= {{ size: 10, offset: 1 }}>
                                    <CustomCarousel className="carousel"/>
                                </Col>
                            </Row>

                        :

                            <span></span>
                    }

                </Container>
            </div>
        );
    }
}

export default Home;

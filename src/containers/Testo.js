import React, { Component } from 'react';
import { Container, Fade } from 'reactstrap';
import './../App.css';
import CustomNavbar from './../components/CustomNavbar'
import Handler from './../kooper/kooper'
import { Redirect } from 'react-router-dom';

class Testo extends Component {
    CustomNavbar

    constructor() {
        super();
        this.state = {
            handler: Handler(),
            showCarousel: false,
            goToHome: false,
            showText: false
        }
        this.changeRouteHandler = this.changeRouteHandler.bind(this);
        this.showTextHandler = this.showTextHandler.bind(this);
    }


    componentDidMount() {
        this.state.handler.registerChangeRouteHandler(this.changeRouteHandler);
        this.state.handler.registershowTextHandler(this.showTextHandler);
    }

    componentWillUnmount() {
        this.state.handler.unregisterChangeRouteHandler();
        this.state.handler.unregistershowTextHandler();
    }


    changeRouteHandler(data) {
        if (data.goToHome) {
            this.setState({
                goToHome: true
            });
        }
    }

    showTextHandler(data) {
        if (data.showText === "apri") {
            if (this.state.showText === false) {
                this.setState({
                    showText: true
                });
            }
        }

        if (data.showText === "chiudi") {
            if (this.state.showText === true) {
                this.setState({
                    showText: false
                });
            }
        }
    }

    render() {
        return (
            <div>
                {(this.state.goToHome) ? <Redirect to="/" /> : <strong></strong>}
                <CustomNavbar className="navbar" />
                <Container fluid={true} >

                    <Fade in={this.state.showText} tag="h5" className="mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui ipsum nihil quod voluptatem ducimus sapiente, expedita eaque nesciunt fuga quae magnam vitae at eius natus voluptate. Dolorum, laudantium accusantium? Eveniet mollitia, sequi consequatur tenetur recusandae perspiciatis blanditiis corporis sit nihil doloremque quo, delectus iure, hic eius asperiores ea fugit itaque ad unde? Expedita sed cum suscipit atque quod fugiat blanditiis, necessitatibus molestias optio omnis impedit nobis similique reprehenderit iste harum explicabo sit. Laudantium ipsa soluta sequi, aliquam repellendus magni rem facere natus fuga, adipisci cum possimus praesentium laborum tenetur perspiciatis placeat culpa voluptatem. Autem enim tempora, qui possimus, tenetur quam sed voluptas et alias at magnam officia sapiente illum amet consequuntur quasi obcaecati minus ratione. Fugit dignissimos nesciunt eius, nisi eveniet consectetur nam aspernatur maxime et quia. Quam corrupti ipsum hic optio explicabo tempora illo numquam at id fugit velit a neque possimus earum aut iusto autem rerum, quis sint quisquam assumenda accusamus impedit? Non inventore consequatur aperiam fuga dolores quam possimus maiores ut assumenda ratione repellat ipsum officia id alias laborum at, doloribus illum accusantium, voluptatum minima aut saepe! Accusantium sed odio, voluptatibus impedit beatae exercitationem blanditiis nulla sunt vitae iste similique natus inventore temporibus ratione esse quia.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit consectetur aliquid facere quos voluptates corrupti quia inventore nulla? Doloribus quia excepturi atque voluptatem et maxime quidem. Placeat eius quidem consequuntur quasi velit inventore obcaecati debitis fugit! Inventore eius quis dolore assumenda suscipit, voluptas quae doloribus quam deserunt quia, cupiditate quas quos placeat eligendi, illum iste. Amet suscipit maxime sint eius iusto inventore beatae voluptate expedita corporis ipsum aut et quam nisi nihil ipsam quod, soluta, vel debitis! Soluta, accusamus quae in repudiandae vel molestias fuga veniam incidunt nemo maiores sunt id odio omnis quaerat doloribus mollitia ea! Saepe exercitationem consectetur tempore ab qui, necessitatibus, commodi ea voluptatibus sed voluptas adipisci ducimus amet vero minima hic! Blanditiis id quia inventore voluptatum saepe distinctio, ab quas laborum eum nihil nemo quisquam itaque repellendus vitae perspiciatis! Architecto illum labore rerum voluptas dolorem odit illo maxime non? Facere error officia saepe voluptate perferendis illo consequatur! Consequuntur totam est hic similique vero eum velit, iure expedita sequi! Voluptates, doloremque. Recusandae dicta incidunt quod dolorum pariatur cum libero aut ipsam, praesentium veritatis placeat. Consequatur quod suscipit, nam ad facere aut veniam excepturi dolores, illum vero perspiciatis quaerat labore repellendus tempora maiores sint voluptates quisquam in? A ratione cumque hic repudiandae, est perferendis ipsum neque vero quam amet quas atque quis magni ab molestias recusandae. Quis ut delectus quae aliquam dolores eligendi. Saepe quisquam eos expedita facilis rem odit, explicabo nulla laboriosam. Dolorem perspiciatis ut reprehenderit nobis, tempora illum obcaecati accusantium assumenda vel ab nesciunt, veritatis at dolorum odit quos, deserunt excepturi accusamus unde consequatur dignissimos iure? Impedit doloribus, laudantium ducimus laboriosam cum tempora officia nulla vitae sed, accusantium omnis delectus recusandae officiis similique autem ex, pariatur aliquid id. Placeat, aspernatur itaque praesentium modi reiciendis, architecto dolor doloribus minus odio libero deserunt harum quasi sapiente consequatur officia.
                </Fade>

                </Container>
            </div>
        );
    }
}

export default Testo;

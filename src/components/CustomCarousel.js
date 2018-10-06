import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Handler from './../kooper/kooper'

const items = [
    {
        src: 'https://source.unsplash.com/user/erondu/1920x500',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://source.unsplash.com/random/1920x500',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://source.unsplash.com/user/sasha/1920x500',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
]

class CustomCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            handler: Handler()
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.carouselHandler = this.carouselHandler.bind(this);
    }

    componentDidMount() {
        this.state.handler.registerCarouselHandler(this.carouselHandler);
    }

    componentWillUnmount() {
        this.state.handler.unregisterCarouselHandler();
    }

    carouselHandler(data) {
        // if carousel has to swipe right data.swipe is "destra"
        if (data.swipe === "destra") {
            this.next();
        }

        // if carousel has to swipe left data.swipe is "sinistra"
        if (data.swipe === "sinistra") {
            this.previous();
        }
    }


    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                interval={false}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default CustomCarousel;

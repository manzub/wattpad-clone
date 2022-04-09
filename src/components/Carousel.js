import React, { Component } from "react";

const CarouselData = [
  {
    image:  "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "First Title 1",
    slug: "Some slug details"
  },
  {
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    title: "First Title 2",
    slug: "Some slug details"
  },
  {
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    title: "First Title 3",
    slug: "Some slug details"
  },
  {
    image: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    title: "First Title 4",
    slug: "Some slug details"
  },
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    const paddInset = "mx-[20px] lg:mx-[250px] my-8 "
    return (
      <div className={paddInset+"mt-8"}>
        <div className="flex items-center justify-center">
          <div className="">
            {CarouselData.map((slide, index) => (<React.Fragment key={index}>
              <div className={index === this.state.currentSlide ? "my-4 font-sans font-bold" : "hidden"}>
                <h3 className="text-2xl">{slide.title}</h3>
                <p className="text-xs text-gray-400">{slide.slug}</p>
              </div>
              <img src={slide.image} alt="" key={index}
                className={index === this.state.currentSlide ? "w-screen rounded-lg shadow-md h-[300px] object-cover" : "hidden" }
                onMouseEnter={() => this.setState({ paused: true })}
                onMouseLeave={() => this.setState({ paused: false })}
              />
            </React.Fragment>))}
          </div>
        </div>
        <div className="mt-5 w-full flex justify-center gap-2 bottom-0">
          {CarouselData.map((element, index) => (
              <div key={index} className={index === this.state.currentSlide ? "h-[10px] w-[10px] bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer" : "h-[9px] w-[9px] bg-gray-500 rounded-full mx-2 mb-2 cursor-pointer" } onClick={() => this.setCurrentSlide(index)}></div>
            ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
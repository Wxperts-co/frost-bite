declare module 'react-slick' {
  import * as React from 'react';

  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    afterChange?: (currentSlide: number) => void;
    appendDots?: (dots: React.ReactNode) => React.ReactNode;
    arrows?: boolean;
    asNavFor?: any;
    autoplay?: boolean;
    autoplaySpeed?: number;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    centerMode?: boolean;
    centerPadding?: string;
    cssEase?: string;
    customPaging?: (i: number) => React.ReactNode;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    lazyLoad?: boolean | 'ondemand' | 'progressive';
    nextArrow?: React.ReactNode;
    prevArrow?: React.ReactNode;
    pauseOnDotsHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    responsive?: Array<{ breakpoint: number; settings: Settings | 'unslick' }>;
    rows?: number;
    slide?: string;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    useCSS?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    waitForAnimate?: boolean;
    [key: string]: any;
  }

  const Slider: React.ComponentType<Settings>;
  export default Slider;
}

"use client";
import React, {  } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import './embla.css'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselButton'

const EmblaCarousel = (props) => {
  const slides = ["/assets/rectangle56.png",
  "/assets/rectangle55.png",
  "/assets/rectangle54.png",
  "/assets/rectangle53.png",
  "/assets/rectangle52.png",
  "/assets/rectangle56.png",
  "/assets/rectangle53.png",
  "/assets/rectangle54.png",]
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
        <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item,index) => (
            <div className="embla__slide" key={index}>
              <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "150px", height: "auto" }}>
                    <Image
                      src={item}
                      alt=""
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
    </div>
  )
}

export default EmblaCarousel

import type { NextPage } from 'next'
import Link from "next/link"
import { useEffect } from "react"
import styled from "styled-components"
import { scrollAnimation } from "../shared/utils/useScrollAnimation"
import { vShader } from "../modules/vShader"
import { fShader } from "../modules/fShader"

const images = [...Array(4)]
  .map((_, index) => `/image${index + 1}.jpg`)

const Home: NextPage = () => {
  useEffect(() => {
    scrollAnimation()
  }, [])
  return (
    <div>
      <h1>experiment scroll animation</h1>
      <Container>
        <ImageList>
          {images.map((imagePath) => {
            const href = `/image${imagePath.replace(".jpg", "")}`
            return (
              <ImageItem key={imagePath}>
                <ImageWrapper href={href} passHref>
                  <a>
                    <Image src={imagePath} alt=""/>
                  </a>
                </ImageWrapper>
              </ImageItem>
            )
          })}
        </ImageList>
      </Container>
      <WebGlCanvas>
        <WebGlCanvasBody id="webgl-canvas" />
      </WebGlCanvas>
      <script id="v-shader" type="x-shader/x-vertex" dangerouslySetInnerHTML={vShader} />
      <script id="f-shader" type="x-shader/x-fragment" dangerouslySetInnerHTML={fShader} />
    </div>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 80vw;
`

const ImageList = styled.ul`
  margin: 0 auto;
  padding: 180px 0;
  width: 100%;
`

const ImageItem = styled.li`
  width: 100%;
  
  & + & {
    margin-top: 360px;
  }
`

const ImageWrapper = styled(Link)`
  display: block;
  width: 100%;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  opacity: 0;
  width: 100%;
`

const WebGlCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const WebGlCanvasBody = styled.canvas`
  height: 100%;
  width: 100%;
`


export default Home

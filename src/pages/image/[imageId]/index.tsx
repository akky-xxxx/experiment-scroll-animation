import { NextPage, GetServerSideProps } from "next"
import styled from "styled-components"

type Props = {
  imageId: string
}

export const ImageId: NextPage<Props> = (props) => {
  const { imageId } = props

  return (
    <div>
      <h2>{imageId}</h2>
      <Image src={`/${imageId}.jpg`} alt=""/>
    </div>
  )
}

const Image = styled.img`
  width: 100%;
`

export const getServerSideProps: GetServerSideProps<Props, Props> = async (context) => {
  const {
    params,
  } = context

  if (!params?.imageId) throw new Error("imageId がありません")

  return {
    props: params,
  }
}

export default ImageId

import Tag from '../Tag'
import { Description, Card, Title, Infos } from './styles'

type Props = {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Description>{description}</Description>
  </Card>
)

export default Product

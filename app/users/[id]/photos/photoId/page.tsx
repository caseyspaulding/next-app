
interface Props{
  params: {
    id: number
    photoId: number
  }
}


const PhtotoPage = ({params: {id, photoId}}: Props) =>
{
  return (
    <div>PhtotoPage { id } { photoId }</div>
  )
}
export default PhtotoPage
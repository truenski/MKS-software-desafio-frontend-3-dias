import './index.css'

type Props = {
    width?: number | string
    height?: number | string
}
export default function Skeleton({ width, height }: Props) {
    return <div className="container" style={{ width, height }}></div>
}

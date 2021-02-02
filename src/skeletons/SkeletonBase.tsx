import './skeleton.css'

interface props {
    type:'text'|'title'|'avatar'|'thumbnail'
}
export const SkeletonBase : React.FC<props> = ({type}) => {
    const classes = `skeleton ${type}`
    return (
        <div className={classes}>
        </div>
    )
}
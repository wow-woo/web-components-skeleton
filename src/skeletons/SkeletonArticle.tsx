import { SkeletonBase } from "./SkeletonBase"

interface props {
    
}
export const SkeletonArticle : React.FC<props> = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className='skeleton-article'>
                <SkeletonBase type='title'/>
                <SkeletonBase type='text'/>
                <SkeletonBase type='thumbnail'/>
                <SkeletonBase type='avatar'/>
            </div>
        </div>
    )
}
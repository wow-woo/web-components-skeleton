import { SkeletonBase } from "./SkeletonBase"

interface props {
    
}
export const SkeletonUser : React.FC<props> = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className='skeleton-user'>
                <SkeletonBase type='title'/>
                <SkeletonBase type='text'/>
                <SkeletonBase type='text'/>
            </div>
        </div>
    )
}
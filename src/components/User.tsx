import { useEffect , useState} from 'react'
import { SkeletonUser } from '../skeletons/SkeletonUser'

const URL = 'http://jsonplaceholder.typicode.com/users/1'
function User() {
    const [profile, setProfile] = useState<{
        username:string
        email:string
        website:string
    }|null>(null)
    
    useEffect(() => {
        setTimeout( async()=>{
            const res = await fetch(URL)
            const data = await res.json()
            setProfile(data)
        },5000)
    }, [])
    
    return (
        <div>
            <h2>User Details</h2>
        {
            profile && (
                <div>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href="/">{profile.website}</a>
                </div>
            )
        }
        {
            !profile && (
                <div>
                    <SkeletonUser />
                </div>
            )
        }
        </div>
    )
    
}

export default User

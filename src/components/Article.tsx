import { useEffect , useState} from 'react'
import { SkeletonArticle } from '../skeletons/SkeletonArticle'

const URL = 'http://jsonplaceholder.typicode.com/posts'

interface IArticle {
    id:string
    title:string
    body:string
}
function Article() {
    const [articles, setArticles] = useState<IArticle[]|null>(null)
    
    useEffect(() => {
        setTimeout( async()=>{
            const res = await fetch(URL)
            const data = await res.json()
            setArticles(data)
        },5000)
    }, [])
    
    return (
        <div>
            <h2>Articles</h2>

            {
                articles && articles.map(article=>(
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))
            }
            {!articles && Array(5).fill(0).map((item, idx)=>(
                <SkeletonArticle key={idx}/>
            ))}
        </div>
    )
}

export default Article

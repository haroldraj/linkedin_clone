
import { useParams } from "react-router-dom";


export default function PostPage()
{
    const params = useParams<{ postId: string }>();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Post Page {params.postId}</h1>
        </div>);
}
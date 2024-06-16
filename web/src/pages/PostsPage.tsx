import { NavLink, Outlet } from "react-router-dom";

export default function PostsPage()
{

    const posts = [1, 2, 3, 4, 5];

    return (
        <div className="flex gap-2">
            <div className="flex flex-col gap-2">
                {posts.map((post) => (
                    <NavLink key={post} to={`/post/${post}`}
                        className={({ isActive }) =>
                        {
                            return isActive ? 'font-bold underline' : ''
                        }}>
                        Post {post}
                    </NavLink>))}
            </div>
            <Outlet />
        </div>);

}

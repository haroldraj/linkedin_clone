
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import './HomePage.css'

export default function HomePage()
{
    return (
        <div className="home">
            <div className="home_body">
                <Sidebar />
                <Feed />
            </div>
        </div>
    );
}


import Feed from "./components/Feed";
import Header from "../../components/header/Header";
import Sidebar from "./components/Sidebar";
import './HomePage.css'

export default function HomePage()
{
    return (
        <div className="home">
            <Header />
            <div className="home_body">
                <Sidebar />
                <Feed />
                <Sidebar />
                {/* Feed */}
                {/* Widget */}
            </div>

        </div>
    );
}


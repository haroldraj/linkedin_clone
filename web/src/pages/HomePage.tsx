import Feed from "../components/Feed";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar";
import './../App.css'

export default function HomePage()
{
    return (
        <div className="app">
            <Header />
            <div className="app_body">
                <Sidebar /> 
                <Feed />
                {/* Feed */}
                {/* Widget */}
            </div>
            
        </div>
    );
}


import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { openPostModal } from "../features/post/postSlice";
import { CreatePostModal } from "./CreatePostModal";

export const AsideLeft = () => {

    const { userData } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    return (
        <aside className="hidden sm:block basis-1/6 lg:basis-1/12">

            <header className="flex font-bold text-blue-600 mx-5 my-4 text-xl xl:text-2xl">
                <Link to="/home"> ALCON </Link>
            </header>

            <CreatePostModal />

            <nav>
                <ul className="pl-2">
                    <li >
                        <Link to="/home" className="flex py-4 gap-3 px-3 cursor-pointer">
                            <i className="text-xl fa-solid fa-house"></i>
                            <h2 className="text-xl px-1 hidden xl:block"> Home </h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore" className="flex py-4 gap-3 px-3 cursor-pointer">
                            <i className="text-xl fa-solid fa-hashtag"></i>
                            <h2 className="text-xl px-1 hidden xl:block"> Explore </h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/notifications" className="flex py-4 gap-3 px-3 cursor-pointer">
                            <i className="text-xl fa-solid fa-bell"></i>
                            <h2 className="text-xl px-1 hidden xl:block"> Notifications </h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookmarks" className="flex py-4 gap-3 px-3 cursor-pointer">
                            <i className="text-xl fa-solid fa-bookmark"></i>
                            <h2 className="text-xl px-1 hidden xl:block"> Bookmarks </h2>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/profile/${userData?.username}`} className="flex py-4 gap-3 px-3 cursor-pointer">
                            <i className="text-xl fa-solid fa-user"></i>
                            <h2 className="text-xl px-1 hidden xl:block"> Profile </h2>
                        </Link>
                    </li>
                    <li className="my-2 mx-1">
                        <button 
                            className="hidden xl:block my-8 mx-0 p-2 rounded-lg w-full text-x cursor-pointer text-center 
                            font-semibold text-white bg-blue-600 hover:bg-blue-800" 
                            onClick={() => dispatch(openPostModal()) }>
                            Post
                        </button>

                        <BiEditAlt 
                            className="w-9 h-9 pl-0 rounded-full block xl:hidden cursor-pointer" 
                            onClick={() => dispatch(openPostModal()) }>
                        </BiEditAlt>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};
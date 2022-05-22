import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../features/user/helpers";

export const AsideRight = () => {

    const {
        user: { users, searchTerm },
        auth: { token, userData }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    // checking if currentUser itself and existing following

    const suggestionList = users.filter(
        suggestedUser => suggestedUser.username !== userData.username && 
        !suggestedUser.followers.find(existingUser => existingUser.username === userData.username)
    )

    const Suggestion = ({ currentUser }) => {
        return (
            <div className="ml-5 mt-8 mb-4 flex ">

                <img 
                    src={currentUser?.profilePicture} 
                    className="w-12 h-12 rounded-full" 
                    alt={`${currentUser?.username}`} />

                <div className="w-full flex flex-col pl-4 shrink">
                    <h2 className="font-semibold flex-nowrap">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>
                    <h2> @{currentUser?.username} </h2>
                </div>

                <button className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out" onClick={() => dispatch(followUser({ followUserId: currentUser._id, token }))} >Follow</button>
            </div>
        )
    }

    return (
        <aside className="w-full basis-2/6 flex flex-col ml-3">

            <div className="relative m-3 text-center">
                <input className="bg-slate-200 text-center p-2 rounded-3xl placeholder:text-black cursor-pointer" type="text" placeholder="Search" />
                <BsSearch className="absolute top-3.5 left-20" />
            </div>

            <h1 className="m-3 text-xl text-center font-bold">Suggestions for you</h1>

            {/* suggestions */}

            <ul className="">
                {suggestionList.map(user => (
                    <Suggestion key={user._id} currentUser={user} />
                ))}
            </ul>

            
        </aside>

    )
};

{/* <div className="ml-5 mt-8 mb-4 flex ">

                <img src="https://i.pravatar.cc/300?img=5" className="w-12 h-12 rounded-full" alt="avatar" />

                <div className="w-full flex flex-col pl-4 shrink">
                    <h2 className="font-semibold flex-nowrap">Veronica Dane</h2>
                    <h2> @veron_d12 </h2>
                </div>

                <button className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
            </div>

            <div className="ml-5 my-4 flex space-between">

                <img src="https://i.pravatar.cc/300?img=32" className="w-12 h-12 rounded-full" alt="avatar" />

                <div className="w-full flex flex-col pl-4">
                    <h2 className="font-semibold">Lucy Staniforth</h2>
                    <h2> @lucy_st4 </h2>
                </div>

                <button className="mr-8 px-3 w-18 h-8  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
            </div>

            <div className="ml-5 my-4 flex space-between">

                <img src="https://i.pravatar.cc/300?img=4" className="w-12 h-12 rounded-full" alt="avatar" />

                <div className="w-full flex flex-col pl-4">
                    <h2 className="font-semibold">Stuart Wood</h2>
                    <h2> @stuart_99 </h2>
                </div>

                <button className="mr-8 px-3 w-18 h-8  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
            </div>

            <div className="ml-5 my-4 flex space-between">

                <img src="https://i.pravatar.cc/300?img=47" className="w-12 h-12 rounded-full" alt="avatar" />

                <div className="w-full flex flex-col pl-4">
                    <h2 className="font-semibold">Rachel Daly</h2>
                    <h2> @rachel_dy3 </h2>
                </div>

                <button className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
            </div> */}
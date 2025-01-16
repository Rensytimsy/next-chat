import SearchIcon from "@mui/icons-material/Search";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ShareIcon from "@mui/icons-material/Share";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function TrendyPage() {
  return (
    <div className="mt-16 flex flex-col lg:flex-row">
  {/* Sidebar */}
  <div className="p-4 w-full lg:w-1/6 bg-headerBlue lg:bg-gray-50 text-white fixed bottom-0 lg:sticky lg:top-0 lg:h-screen flex flex-col items-center">
    {/* Profile Section */}
    <div className="mb-4 hidden lg:flex flex-col items-center space-y-2">
      <div>
        <AccountCircleIcon className="text-5xl text-white lg:text-gray-800" />
      </div>
      <div className="text-center">
        <p className="text-lg font-bold text-white lg:text-gray-900">Code with Rensy</p>
        <p className="text-sm text-gray-300 lg:text-green-500">Active</p>
      </div>
    </div>

    {/* Navigation Menu */}
    <ul className="flex justify-around lg:flex-col lg:space-y-6 text-sm font-medium text-center w-full">
      <li className="hover:text-blue-600 cursor-pointer bg-white lg:bg-gray-50 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
        Home
      </li>
      <li className="hover:text-blue-600 cursor-pointer bg-white lg:bg-gray-50 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
        Explore
      </li>
      <li className="hover:text-blue-600 cursor-pointer bg-white lg:bg-gray-50 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
        Notifications
      </li>
      <li className="hover:text-blue-600 cursor-pointer bg-white lg:bg-gray-50 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
        Messages
      </li>
    </ul>
  </div>

  {/* Main Content */}
  <div className="w-full lg:w-5/6 bg-gray-50 p-10 h-screen flex flex-col items-center">
    {/* Search Bar */}
    <div className="flex items-center justify-between space-x-2 border p-1 rounded-full w-full md:w-1/2 bg-gray-50">
      <input
        type="text"
        placeholder="Search posts, solutions, or topics..."
        className="flex-1 px-4 py-2 outline-none bg-gray-50"
      />
      <button className="px-2 py-2 bg-transparent text-black rounded-full hover:bg-gray-100">
        <SearchIcon className="text-md" />
      </button>
    </div>

    {/* Posts */}
    <div className="space-y-6 mt-10 lg:w-1/2">
      {/* Post */}
      <div className="p-4 border rounded-lg shadow-sm bg-white">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <p className="font-bold text-base">Code with Rensy</p>
              <p className="text-sm text-gray-500">12 minutes ago</p>
            </div>
          </div>
          <div className="text-gray-500 cursor-pointer">...</div>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-gray-800 text-base">
            Is AI really going to take software engineering jobs fully??
          </p>
        </div>

        {/* Post Actions */}
        <div className="flex items-center justify-between text-gray-600">
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>
              <EmojiEmotionsIcon />
            </span>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>
              <ShareIcon />
            </span>
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>
              <ForumIcon />
            </span>
            <span>Comment</span>
          </button>
        </div>
      </div>

      {/* Add more posts here */}
    </div>
  </div>
</div>

  );
}

import axios from "axios";
import { useState } from "react";

const Card = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [username, setUsername] = useState("");
  const [profileInfo, setProfileInfo] = useState("");

  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(accessToken);
      setProfileInfo(response.data);
    } catch (error) {}
  };

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-dark " : "bg-lightMode "
        } h-screen lg:py-40 `}
      >
        <div className="md:max-w-3xl mx-auto ">
          <div
            className={`${
              darkMode ? " text-white" : " text-black"
            } flex justify-between items-center p-8 lg:p-0 lg:mb-8`}
          >
            <h1 className="text-3xl  font-bold">devfinder</h1>
            <div className="flex items-center gap-4 text-xl cursor-pointer">
              <p className="font-normal">{darkMode ? "LIGHT" : "DARK"}</p>
              <img
                src={`${darkMode ? "icon-sun.svg" : "icon-moon.svg"}`}
                onClick={() => setDarkMode(!darkMode)}
              ></img>
            </div>
          </div>
          {/* search section */}
          <div className=" text-center flex items-center relative shadow-2xl">
            <input
              className={`${
                darkMode
                  ? "bg-cardBackground text-white"
                  : "bg-cardBackgroundLight"
              } h-16 mx-auto rounded-2xl p-2 w-[90%]  lg:w-full lg:px-6 `}
              type="text"
              placeholder="Search GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className={` text-white bg-buttonBg h-12 rounded-xl p-2 absolute right-6 md:right-12 lg:right-4  md:w-28 font-bold`}
              onClick={fetchProfile}
            >
              Search
            </button>
          </div>

          {/* card info section */}
          <div
            className={`${
              darkMode ? "bg-cardBackground" : "bg-cardBackgroundLight"
            } w-[90%] rounded-2xl mx-auto mt-4 p-6  lg:w-full shadow-2xl relative`}
          >
            <div className="flex gap-8 items-center">
              <img
                className="rounded-full w-16 lg:w-24"
                src={
                  profileInfo ? profileInfo.avatar_url : "github-octopus.jpg"
                }
                alt="github photo"
              ></img>
              <div className="lg:flex lg:items-start lg:gap-16">
                <div>
                  <h1
                    className={`${
                      darkMode ? " text-white" : " text-black"
                    } text-xl lg:text-2xl font-bold `}
                  >
                    {profileInfo ? profileInfo.name : "The Octocat"}
                  </h1>
                  <p className="text-blue-600">
                    {" "}
                    @{profileInfo ? profileInfo.login : "octocat"}
                  </p>
                </div>
                <p
                  className={`${
                    darkMode ? " text-white" : " text-black"
                  } opacity-75`}
                >
                  Joined{" "}
                  {profileInfo
                    ? new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date(profileInfo.created_at))
                    : " 25 Jan 2011"}
                </p>
              </div>
            </div>
            <div className="lg:ml-20">
              <div className="mt-8 ml-4 ">
                <p
                  className={`${
                    darkMode ? " text-white" : " text-black"
                  } opacity-75`}
                >
                  {profileInfo && profileInfo.bio != null
                    ? profileInfo.bio
                    : "This profile has no bio  "}
                </p>
              </div>
              <div
                className={`${
                  darkMode ? "bg-dark text-white" : "bg-lightMode text-black"
                } rounded-2xl p-4 flex justify-around items-center mt-8 lg:max-w-xl lg:h-24 `}
              >
                <p className="flex flex-col">
                  Repos{" "}
                  <span className="font-bold text-2xl">
                    {profileInfo.public_repos}
                  </span>
                </p>
                <p className="flex flex-col">
                  Followers{" "}
                  <span className="font-bold text-2xl">
                    {profileInfo.followers}
                  </span>
                </p>
                <p className="flex flex-col">
                  Following{" "}
                  <span className="font-bold text-2xl">
                    {profileInfo.following}
                  </span>
                </p>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-4">
                <div className={`flex items-center gap-2 my-2`}>
                  <img src="icon-location.svg" alt="location icon"></img>
                  <p className={`${darkMode ? " text-white" : " text-black"} `}>
                    {profileInfo && profileInfo.location != null
                      ? profileInfo.location
                      : "Not Available"}
                  </p>
                </div>
                <div className={`flex items-center gap-2 my-2`}>
                  <img src="icon-twitter.svg" alt="twitter icon"></img>
                  <p className={`${darkMode ? " text-white" : " text-black"} `}>
                    {profileInfo && profileInfo.twitter_username != null
                      ? profileInfo.twitter_username
                      : "Not Available"}
                  </p>
                </div>
                <div className={`flex items-center gap-2 my-2`}>
                  <img src="icon-website.svg" alt="website icon"></img>
                  <p
                    className={`${
                      darkMode ? " text-white" : " text-black"
                    } text-sm`}
                  >
                    <a
                      href={
                        profileInfo && profileInfo.blog != ""
                          ? profileInfo.blog
                          : "Not Available"
                      }
                    >
                      {profileInfo && profileInfo.blog != ""
                        ? profileInfo.blog
                        : "Not Available"}
                    </a>
                  </p>
                </div>
                <div className={`flex items-center gap-2 my-2`}>
                  <img src="icon-company.svg" alt="website icon"></img>
                  <p className={`${darkMode ? " text-white" : " text-black"} `}>
                    {profileInfo && profileInfo.company != null
                      ? profileInfo.company
                      : "@github"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

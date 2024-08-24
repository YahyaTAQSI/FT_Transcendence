"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";
import raqeta from "../../public/rakita.png";
import apb from "../../public/apb.png";
import { FaGamepad } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loggedUser } from "../Atoms/logged";
import { userToken } from "../Atoms/userToken";
import { userNotifications } from "../Atoms/notifications";
import { userTwoFA } from "../Atoms/_2faUser";
import { twoFA } from "../Atoms/_If_2fa";
import { useRouter } from "next/navigation";
import { blockedMe } from "../Atoms/blockedMe";
import { channelId } from "../Atoms/channelId";
import { chatMSG } from "../Atoms/chatMSG";
import { currentFriend } from "../Atoms/currentFriend";
import { selectedFriendProfile } from "../Atoms/selectedFriendProfile";
import { gameModeVar } from "../Atoms/gameMode";
import { gameRequest } from "../Atoms/gameRequest";
import { gameResponse } from "../Atoms/gameRespose";
import { g_gameStarted } from "../Atoms/gameStarted";
import { loadingMsg } from "../Atoms/loadingMsg";
import { tablePicture } from "../Atoms/tablePicture";
import { userAvatar } from "../Atoms/userAvatar";
import defautPicture from "@/public/game/tables/default-table.png";
import { slctdFriend } from "../Atoms/friendAtom";

const Nav = () => {
  const [loggedU, setLoggedU] = useRecoilState(loggedUser);

  const [loggedT, setLoggedT] = useRecoilState(userToken);

  const setUserTwoFA = useSetRecoilState(userTwoFA);
  const setTwoFA = useSetRecoilState(twoFA);
  const setBlockedMe = useSetRecoilState(blockedMe);
  const setChannelId = useSetRecoilState(channelId);
  const setChatMSG = useSetRecoilState(chatMSG);
  const setCurrentFriend = useSetRecoilState(currentFriend);
  const SetslctdFriend = useSetRecoilState(slctdFriend);
  const setSelectedFriendProfile = useSetRecoilState(selectedFriendProfile);
  const setGameModeVar = useSetRecoilState(gameModeVar);
  const setGameRequest = useSetRecoilState(gameRequest);
  const setGameResponse = useSetRecoilState(gameResponse);
  const setGGameStarted = useSetRecoilState(g_gameStarted);
  const setLoadingMsg = useSetRecoilState(loadingMsg);
  const setLoggedUser = useSetRecoilState(loggedUser);
  const setUserNotifications = useSetRecoilState(userNotifications);
  const setTablePicture = useSetRecoilState(tablePicture);
  const setUserAvatar = useSetRecoilState(userAvatar);
  const setUserToken = useSetRecoilState(userToken);

  const router = useRouter();
  const logout = async (e: any) => {
    e.preventDefault();
    if (loggedU !== -1) {
      const uid = loggedU;
      const tok = loggedT;
      const body = {
        status: "offline",
      };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/status/${uid}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tok}`,
            },
            body: JSON.stringify(body),
          }
        );
      } catch (error) {
        console.error("Error:", error);
      }

      setUserTwoFA(-1);
      setTwoFA(false);
      setBlockedMe(false);
      setChannelId(-1);
      setChatMSG([]);
      setCurrentFriend({});
      SetslctdFriend(-1);
      setGameModeVar("");
      setGameRequest(-1);
      setGameResponse(0);
      setGGameStarted(false);
      setLoadingMsg(false);
      setLoggedUser(-1);
      setUserNotifications([]);
      setSelectedFriendProfile(-1);
      setTablePicture(defautPicture.src);
      setUserAvatar(`${process.env.NEXT_PUBLIC_BACKEND_URL}/default.png`);
      setUserToken("");
      router.replace("/login");
    }
  };

  return (
    <div className="main-Nav">
      <div className="logo-and-links">
        <div className="logo">
          <Link className="link" href="/">
            <div>
              <Image
                className="image-logo"
                src={raqeta}
                alt="LOGO"
                width={100}
              />
            </div>
            <div>
              <Image className="apb-logo" src={apb} alt="LOGO" width={100} />
            </div>
          </Link>
        </div>
        <ul>
          <Link className="link" href="/play">
            <li>
              <div>
                <FaGamepad className="nav-icon" />
              </div>
              <div>
                Play<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/profile">
            <li>
              <div>
                <FaUser className="nav-icon" />
              </div>
              <div>
                Profile<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/leaderboard">
            <li>
              <div>
                <FaRankingStar className="nav-icon" />
              </div>
              <div>
                Leaderboard<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/chat">
            <li>
              <div>
                <IoMdChatbubbles className="nav-icon" />
              </div>
              <div>
                Chat<span className="hover-line"></span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="settings-logout">
        <ul>
          <Link className="link" href="/settings">
            <li>
              <div>
                <IoMdSettings className="nav-icon" />
              </div>
              <div>
                Settings<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <li onClick={logout} style={{ cursor: "pointer" }}>
            <div>
              <MdOutlineLogout className="nav-icon" />
            </div>
            <div>Log-out</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const AlbumItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)} 
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;

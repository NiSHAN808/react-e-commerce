import React, { useEffect, useState } from "react";
import io from "socket.io-client";



let socket;

export const PlayWithFriends = () => {
  const [yourName, setYourName] = useState("");
  const [enemyName, setEnemyName] = useState("Waiting");
  const [yourLife, setYourLife] = useState(3);
  const [enemyLife, setEnemyLife] = useState(3);
  const [positions, setPositions] = useState(Array(9).fill(null));
  const [playerNumber, setPlayerNumber] = useState(null);
  const [turn, setTurn] = useState(null);

useEffect(() => {
  socket = io("http://localhost:8000");

  const name = localStorage.getItem("name");
  setYourName(name);
  socket.emit("i-pn-s", name);

  const handleConnect = () => {
    socket.on(socket.id, (enemy_name, room_id, player_no) => {
      setEnemyName(enemy_name);
      setPlayerNumber(player_no);
      
      setTurn(player_no % 2 === 1 ? 1 : 2); console.log(turn);
    });      console.log(socket.id);
  socket.on(socket.id + "moves", handleMove);
  };

  const handleMove = (index) => {
    updatePosition(index, 2);
    setTurn(1);
  };

  socket.on("connect", handleConnect);
  // console.log(socket.id);
  // socket.on(socket.id + "moves", handleMove);

  // Cleanup
  return () => {
    socket.off("connect", handleConnect);
    socket.off(socket.id, handleConnect);
    socket.off(socket.id + "moves", handleMove);
    socket.disconnect();
  };
}, []);

  const updatePosition = (index, player) => {
    setPositions((prev) => {
      const updated = [...prev];
      updated[index] = player;
      return updated;
    });
  };

  const handleClick = (index) => {
    if (positions[index] === null && turn === 1) {
      updatePosition(index, 1);
      setTurn(2);
      socket.emit("game-move", playerNumber, index);
    } else if (positions[index] !== null) {
      alert("Spot taken!");
    } else {
      alert(`${enemyName}'s turn`);
    }
  };

  const hearts = (count) => {
    return Array(count).fill("❤️").join(" ");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-green-700 to-yellow-400 flex flex-col items-center justify-center">
      <div className="w-[35rem] h-[7rem] flex justify-between items-center px-4">
        <div className="text-3xl font-fantasy text-blue">{yourName}</div>
        <div className="text-2xl">{hearts(yourLife)}</div>
        <div className="text-3xl font-fantasy text-red">{enemyName}</div>
        <div className="text-2xl">{hearts(enemyLife)}</div>
      </div>
      <div className="w-[19rem] h-[19rem] bg-black grid grid-cols-3 gap-2 mt-4">
        {positions.map((value, idx) => (
          <div
            key={idx}
            className="w-[6rem] h-[6rem] bg-white flex justify-center items-center text-3xl font-cursive cursor-pointer"
            style={{ color: value === 1 ? "blue" : value === 2 ? "red" : "transparent" }}
            onClick={() => handleClick(idx)}
          >
            {value === 1 ? "X" : value === 2 ? "O" : "."}
          </div>
        
        ))}
      </div>  {turn===1 ? "yours" : "enemy's"}
    </div>
  );
};

export default PlayWithFriends        
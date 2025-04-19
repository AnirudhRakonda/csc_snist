import React from "react";

const Scoreboard = ({ data }) => {
  if (!data || data.status !== "success") return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">🏆 Scoreboard</h1> */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-green-400">
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Avatar</th>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Score</th>
              <th className="px-4 py-2 text-left">Level</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((user) => (
              <tr key={user.username} className="border-b hover:bg-green-400">
                <td className="px-4 py-2 font-medium">{user.rank}</td>
                <td className="px-4 py-2">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.score}</td>
                <td className="px-4 py-2">{user.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;

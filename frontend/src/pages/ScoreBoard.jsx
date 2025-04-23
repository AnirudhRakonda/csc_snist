import React from "react";

const Scoreboard = ({ data }) => {
  if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-green-400">
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Avatar</th>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Flags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
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
                <td className="px-4 py-2">{user.flags}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;

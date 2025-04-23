import { useEffect } from "react";
import Scoreboard from "./ScoreBoard";

export default function ContestScoreBoard() {


  return (
    <>
      <div className="bg-background text-text font-jetbrains">
        <div className="pt-20">
          <section id="contests">
            <h1 className="text-2xl font-bold mb-4 text-center">🏆 Scoreboard SKY-CTF</h1>
          </section>
        </div>
        <Scoreboard
          data={
            [
              {
                "username": "jiraiya.p",
                "rank": 1,
                "flags": "9/10",
                "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/659d9f95470b26bdeea77794-1709544392359"
              },
              {
                "username": "rakshithk228",
                "rank": 2,
                "flags": "8/10",
                "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/5c6dbb477b523411284a8fa159a3743a.jpg"
              },
              {
                "username": "ritikaladda2",
                "rank": 3,
                "flags": "8/10",
                "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/adb7ad7d377b3136e271af7a7b4903d6.png"
               },
              {
                "username": "Srivalli.",
                "rank": 4,
                "flags": "8/10",
                "avatar": "https://secure.gravatar.com/avatar/e25dab6eb2b34407ac5e44523008081d.jpg?s=200&d=robohash&r=x"
                },
              {
                "username": "manojreddypalla",
                "rank": 5,
                "flags": "7/10",
                "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/624f8fff5df4db623f4515afca358845.jpg"
              }
            ]
          }
        ></Scoreboard>
      </div>
    </>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";

const Contests = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token"); // Check for token in localStorage
    const isLoggedIn = !!token; // Determine if the user is logged in based on the token

    const previousContests = [
        { id: 1, name: "TryHackMe Challenge 2023", leaderboardLink: "/leaderboard/1" },
        { id: 2, name: "Cyber Security Contest 2022", leaderboardLink: "/leaderboard/2" },
    ];

    const upcomingContests = [
        { id: 1, name: "Capture The Flag 2024", date: "2024-01-15", link: "https://tryhackme.com/ctf2024" },
        { id: 2, name: "Hackathon 2024", date: "2024-02-20", link: "https://tryhackme.com/hackathon2024" },
    ];

    const handleContestClick = (leaderboardLink) => {
        navigate(leaderboardLink);
    };

    if (!isLoggedIn) {
        return (
            <div
            style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            }}
            >
            <h1 style={{ marginBottom: "20px", fontSize: "34px", color: "red" }}>Access Denied</h1>
            <p style={{ marginBottom: "30px" }}>
            You need to be a Hack Team member to get access to the contest page.
            </p>
            <div>
            <button
            onClick={() => navigate("/signup")}
            style={{
                background: "#007bff",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                marginRight: "10px",
            }}
            >
            Sign Up
            </button>
            <button
            onClick={() => navigate("/login")}
            style={{
                background: "#28a745",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
            }}
            >
            Log In
            </button>
            </div>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Contests</h1>

            <section>
                <h2>Previous Contests</h2>
                <ul>
                    {previousContests.map((contest) => (
                        <li key={contest.id} style={{ marginBottom: "10px" }}>
                            <button
                                onClick={() => handleContestClick(contest.leaderboardLink)}
                                style={{
                                    background: "none",
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    cursor: "pointer",
                                }}
                            >
                                {contest.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Upcoming Contests</h2>
                <ul>
                    {upcomingContests.map((contest) => (
                        <li key={contest.id} style={{ marginBottom: "10px" }}>
                            <div>
                                <strong>{contest.name}</strong> - {contest.date}
                            </div>
                            <a
                                href={contest.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "blue", textDecoration: "underline" }}
                            >
                                Contest Details
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Contests;
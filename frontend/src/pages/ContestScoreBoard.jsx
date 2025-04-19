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
                        {
                            "status": "success",
                            "data": [
                                {
                                    "score": 180,
                                    "tasks": {
                                        "1": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 50,
                                                "attempts": 1,
                                                "_id": "6801ced2b314b81109765c0f",
                                                "timeCorrect": "2025-04-19T16:57:34.914Z"
                                            }
                                        ],
                                        "2": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 30,
                                                "attempts": 1,
                                                "_id": "6802288e77d19211e39d01dc",
                                                "timeCorrect": "2025-04-19T15:13:21.869Z"
                                            },
                                            {
                                                "_id": "68026f861f9e5ad5f1da9264",
                                                "questionNo": 2,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 1
                                            },
                                            {
                                                "_id": "6802713a920a3d3a84967d3a",
                                                "questionNo": 3,
                                                "correct": true,
                                                "score": 20,
                                                "attempts": 1,
                                                "timeCorrect": "2025-04-19T17:00:11.664Z"
                                            }
                                        ],
                                        "3": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 80,
                                                "attempts": 3,
                                                "_id": "680338a9d8f771f99f64f177",
                                                "timeCorrect": "2025-04-19T15:18:44.748Z"
                                            }
                                        ]
                                    },
                                    "level": 8,
                                    "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/668135c8396b1376367836a0-1741680725910",
                                    "username": "N3tPh4nt0m",
                                    "rank": 1
                                },
                                {
                                    "score": 70,
                                    "tasks": {
                                        "1": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 50,
                                                "attempts": 3,
                                                "_id": "6801cd3f43a2b96c0da7f626",
                                                "timeCorrect": "2025-04-19T05:31:39.368Z"
                                            }
                                        ],
                                        "2": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 0,
                                                "attempts": 2,
                                                "_id": "6802288e77d19211e39d01dc",
                                                "timeCorrect": "2025-04-19T05:42:47.429Z"
                                            },
                                            {
                                                "_id": "68026f861f9e5ad5f1da9264",
                                                "questionNo": 2,
                                                "correct": true,
                                                "score": 0,
                                                "attempts": 1,
                                                "timeCorrect": "2025-04-19T05:44:36.344Z"
                                            },
                                            {
                                                "_id": "6802713a920a3d3a84967d3a",
                                                "questionNo": 3,
                                                "correct": true,
                                                "score": 0,
                                                "attempts": 1,
                                                "timeCorrect": "2025-04-19T05:45:42.996Z"
                                            }
                                        ],
                                        "3": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 20,
                                                "attempts": 1,
                                                "_id": "680338a9d8f771f99f64f177",
                                                "timeCorrect": "2025-04-19T15:21:34.366Z"
                                            }
                                        ]
                                    },
                                    "level": 6,
                                    "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/65be27e972e581cc4cd968ff-1745086648544",
                                    "username": "Sh4d0wDr4g0n",
                                    "rank": 2
                                },
                                {
                                    "score": 50,
                                    "tasks": {
                                        "1": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 30,
                                                "attempts": 4,
                                                "_id": "6803b9f9d714778eb01096d7",
                                                "timeCorrect": "2025-04-19T15:12:42.521Z"
                                            }
                                        ],
                                        "2": [
                                            {
                                                "questionNo": 1,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 5,
                                                "_id": "6803b9f9d714778eb01096d9"
                                            },
                                            {
                                                "questionNo": 2,
                                                "correct": true,
                                                "score": 20,
                                                "attempts": 1,
                                                "_id": "6803b9f9d714778eb01096da",
                                                "timeCorrect": "2025-04-19T15:40:28.604Z"
                                            },
                                            {
                                                "questionNo": 3,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 2,
                                                "_id": "6803b9f9d714778eb01096db"
                                            }
                                        ],
                                        "3": [
                                            {
                                                "questionNo": 1,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803b9f9d714778eb01096dd"
                                            }
                                        ]
                                    },
                                    "level": 1,
                                    "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/6e09c1b81a68c43e6e62ec9739ee4ecb.png",
                                    "username": "anirudhprasadrak",
                                    "rank": 3
                                },
                                {
                                    "score": 40,
                                    "tasks": {
                                        "1": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 20,
                                                "attempts": 6,
                                                "_id": "6803c0d3c9ddead120b02593",
                                                "timeCorrect": "2025-04-19T15:35:05.632Z"
                                            }
                                        ],
                                        "2": [
                                            {
                                                "questionNo": 1,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 1,
                                                "_id": "6803c0d3c9ddead120b02595"
                                            },
                                            {
                                                "questionNo": 2,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803c0d3c9ddead120b02596"
                                            },
                                            {
                                                "questionNo": 3,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803c0d3c9ddead120b02597"
                                            }
                                        ],
                                        "3": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 20,
                                                "attempts": 1,
                                                "_id": "6803c0d3c9ddead120b02599",
                                                "timeCorrect": "2025-04-19T16:44:45.417Z"
                                            }
                                        ]
                                    },
                                    "level": 1,
                                    "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/d7f9fac8ceae216afd3e22a0c6e44e60.png",
                                    "username": "abdulfarhathmohd",
                                    "rank": 4
                                },
                                {
                                    "score": 20,
                                    "tasks": {
                                        "1": [
                                            {
                                                "questionNo": 1,
                                                "correct": true,
                                                "score": 20,
                                                "attempts": 4,
                                                "_id": "6803e17c686aee1f469ebef4",
                                                "timeCorrect": "2025-04-19T17:57:36.267Z"
                                            }
                                        ],
                                        "2": [
                                            {
                                                "questionNo": 1,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803e17c686aee1f469ebef6"
                                            },
                                            {
                                                "questionNo": 2,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803e17c686aee1f469ebef7"
                                            },
                                            {
                                                "questionNo": 3,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803e17c686aee1f469ebef8"
                                            }
                                        ],
                                        "3": [
                                            {
                                                "questionNo": 1,
                                                "correct": false,
                                                "score": 0,
                                                "attempts": 0,
                                                "_id": "6803e17c686aee1f469ebefa"
                                            }
                                        ]
                                    },
                                    "level": 1,
                                    "avatar": "https://secure.gravatar.com/avatar/1fd16ea5741546c37cdd015d5e1ab738.jpg?s=200&d=robohash&r=x",
                                    "username": "Dontletthemknow",
                                    "rank": 5
                                }
                            ]
                        }
                    }
                ></Scoreboard>
            </div>
        </>
    );
}
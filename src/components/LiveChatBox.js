import { useEffect, useState } from "react";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/Slices/LiveChatSlice";

const LiveChatBox = () => {
    const dispatch = useDispatch();
    const comments = useSelector((store) => store.livechat.comments);
    const [text, setText] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addComment({
                name: generateRandomName(),
                message: generateRandomMessage()
            }));
        }, 2000);
        return () => {
            clearInterval(timer);
        }

    }, []);

    if (comments === undefined || comments.length === 0) {
        return (
        <div>
            <div className="py-40 px-96 h-full flex justify-center w-full">
                <div className="p-2">
                    <h1>Loading....</h1>
                </div>
            </div>
        </div>)
    }

    const handleKeyStroke = (event) => {
        if (event.key === "Enter") {
            dispatch(addComment({
                name: "Amar",
                message: text
            }));
            setText("");
        }
    }

    return (
        <div className="py-36 w-full flex flex-col justify-center bg-gray-100">
            <div className="bg-white shadow-xl  w-[400px] mx-auto p-2  h-[600px] rounded-xl shadow-xl">
                <div className="h-[30px] p-1 bg-gray-300">
                    <span className="font-bold">Live Chat</span>
                </div>
                <div className=" h-[500px] overflow-y-scroll">
                    {comments.map((comment, index) => <SingleMessage key={index} comment={comment}/>)}
                </div>

                <div className="p-2">
                    <input
                        onKeyDown={handleKeyStroke}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Chat..."
                        className="p-2 rounded-full w-full h-10 border border-black"
                    />
                </div>
                
            </div>
            

        </div>
    )
};

const SingleMessage = ({comment}) => {
    const {name, message} = comment;
    return (
        <div>
            <div className="flex p-2">
                <span className="font-bold p-1">{name}</span>
                <span className="p-1">{message}</span>
            </div>
        </div>
    )
};

export default LiveChatBox;
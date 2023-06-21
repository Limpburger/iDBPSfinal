import React, {useState} from "react";
import Picture from "./Picture"
import {useDrop} from "react-dnd";
import "../App.css"


const PictureList = [
    {
        id: 1,
        url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
    },
    {
        id: 3,
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
]

function DragDrop() {

    const [board, setBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    };

    return(
        <>
        <div className="Pictures">
            {PictureList.map((picture) => {
            return <Picture url={picture.url} id={picture.id}/>;
        })}
        </div>
        
        <div className="Board" ref={drop}>
        {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id}/>;
        })}
        </div>
        </>
    );
}

export default DragDrop;
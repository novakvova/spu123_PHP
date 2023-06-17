import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const App = () => {
    useEffect(()=> {
        axios.get("http://laravel.spu123.com/api/category")
            .then(resp=> {
                console.log("Server result", resp);
            });
        console.log("Use Effect");
    },[]);
    return (
        <>
            <h1 className="text-center">Привіт козаки</h1>
            <div className="container">
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Назва</th>
                        <th>Фото</th>
                        <th>Опис</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>фіваф</td>
                        <td>фівафіа</td>
                        <td>фіва</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;

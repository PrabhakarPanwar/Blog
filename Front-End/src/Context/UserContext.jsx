import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [blogData, setBlogData] = useState();
    const [teamInfo, setTeamInfo] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:8000/data");
                setBlogData(res.data.blog);
                setTeamInfo(res.data.team);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ blogData, teamInfo }}>
            {children}
        </UserContext.Provider>
    );
};
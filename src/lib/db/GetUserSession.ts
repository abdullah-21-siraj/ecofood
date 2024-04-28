import React, { useEffect } from "react";
import { useState } from "react";
import { UserData } from "./StaticData";




async function GetUserSession() {
    const [user, setUser] = useState<UserData | null>(null);
    const [status, setStatus] = useState("");

    useEffect(() => {


        const getUser = async () => {

            try {
                const response = await fetch(process.env.NEXT_PUBLIC_web_url + "/api/authenticate/session", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },

                })
                const data = await response.json();
                setUser(data);
                // return response.json();
            } catch (error) {
                setStatus("404");
            }
        }
        // const data = await getUser();
        // setUser(data.user);
        getUser();
    }, [])

    return { user, status }


}

export default GetUserSession
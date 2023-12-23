"use client"
import React, { useCallback, useContext, useEffect } from "react";
import Groups from "@/components/Group/Groups";
import { Context } from "@/contextapi/contextapi";

export default function Home() {
  const { setUserState, setTickets } = useContext(Context);

  const FetchResponseFromApi = useCallback(async () => {
    const res = await fetch(
      "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
    );
    const data = await res.json();
    setUserState(data.users)
    setTickets(data.tickets)
  },[setTickets, setUserState])

  useEffect(() => {
    FetchResponseFromApi()
  }, [FetchResponseFromApi, setTickets, setUserState]);
  return (
    <main className="bg-[#89868624] min-h-[90vh]">
      <Groups />
    </main>
  );
}

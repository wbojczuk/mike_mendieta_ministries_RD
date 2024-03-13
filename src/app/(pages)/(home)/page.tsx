import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import Message from "@/app/(mainsite)/components/homepage/Message/Message"
import BeFree from "@/app/(mainsite)/components/homepage/BeFree/BeFree"
import WhatWeBelieve from "@/app/(mainsite)/components/homepage/WhatWeBelieve/WhatWeBelieve"
import ThePastor from "@/app/(mainsite)/components/homepage/ThePastor/ThePastor"
import BibleVerse from "@/app/(mainsite)/components/homepage/BibleVerse/BibleVerse"
import ReachEveryone from "@/app/(mainsite)/components/homepage/ReachEveryone/ReachEveryone"

export default function Home() {
  return (
    <>
      <Header />
      <Message />
      <BeFree />
      <WhatWeBelieve />
      <ThePastor />
      <BibleVerse />
      <ReachEveryone />
    </>
  )
}

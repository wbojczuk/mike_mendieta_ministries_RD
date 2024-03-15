import type { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import Support from "@/app/(mainsite)/components/supportpage/BeFree/Support"

export const metadata: Metadata = {
    title: "Support Page",
    description: ""
}

export default function SupportPage(){
    return(
        <>
            <PageTitle pageTitle="Support" />
            <Support />
        </>
    )
}
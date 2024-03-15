import type { Metadata } from "next"
import styles from "./contact.module.css"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import FormAndMap from "@/app/(mainsite)/components/contactpage/FormAndMap/FormAndMap"

export const metadata: Metadata = {
    title: "Contact Page",
    description: ""
}

export default function ContactPage(){
    return(
        <>
            <PageTitle pageTitle="Contact" />
            <ContactInfo />
            <FormAndMap />
        </>
    )
}
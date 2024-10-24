import { Footer } from "@/components/Template/Footer"
import { Header } from "@/components/Template/Header"
import { LateralBar } from "@/components/Template/LateralBar";
import { ReactNode } from "react";

type TemplateProps = {
  children:ReactNode;
}
export const Template = ({children}:TemplateProps) => {
  return (
    <>
      <Header/>
      <main className='flex'>
        <LateralBar/>
        {children}
      </main>
      <Footer/>
    </>
  )
}

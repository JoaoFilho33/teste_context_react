import React, { ReactNode, createContext, useContext } from "react";

const MyContext = createContext(0)

interface MyContextProps {
  children: ReactNode
  level: number
}

interface SectionProps{
  level: number
  children: ReactNode
}

const MyContextComponent = ({children, level}: MyContextProps) => {
  return <MyContext.Provider value={level} >{children}</MyContext.Provider>
}

const Section = ({level, children}: SectionProps) => {
  return <MyContextComponent level={level}>{children}</MyContextComponent>
}

const Header = () => {
  const levelContext = useContext(MyContext)
  return <h1>{levelContext}</h1>
}

export default function Page() {
  return (
   <Section level={1}><Header></Header><Section level={2}><Header /><Header /><Header /><Header /><Header /></Section></Section>
  );
}

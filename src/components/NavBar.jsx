import { useEffect, useState } from "react"
import { cn } from "../LIB/utils"

const navLinks = [
        {name: "Home" , href: "#hero"},
        {name: "About" , href: "#about"},
        {name: "Skills" , href: "#skills"},
        {name: "Projects" , href: "#projects"},
        {name: "Contact" , href: "#contact"}
    ]

export default function NavBar() {
    const [isScrolled,setIsScrolled] = useState(false)

    useEffect(() =>{
        const handleScroll = () =>{
            
        }
    },[])
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", )}>
      
    </nav>
  )
}

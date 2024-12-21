 'use client'
import React from 'react'
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button"



export const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();

  return (
   <Button onClick= {() => setTheme(theme === 'dark'?'light' :'dark')}
   className="p-2 rounded-md border border-gray-300 dark:border-gray-700">

{theme === 'dark' ? (
  <Sun className="w-5 h-5 text-blue-500" />
):(<Moon className="w-5 h-5 text-blue-500" />)


}




   </Button>
  )
}

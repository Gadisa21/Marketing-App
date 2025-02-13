"use client"
import { createContext, useContext, useState, ReactNode } from "react"

interface SearchContextProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedBrand: string
  setSelectedBrand: (brand: string) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery,selectedBrand, setSelectedBrand }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
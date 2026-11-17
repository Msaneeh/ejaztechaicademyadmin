import { Search } from "lucide-react"

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
              <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input 
              type="search" 
              placeholder="Search course title, tutor, or ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-xl border border-ink-line bg-canvas pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/5" 
            />
          </div>
    </>
  )
}

export default SearchBar
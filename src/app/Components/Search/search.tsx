/** @format */

import { LinkItem } from '@/app/types'

type PropTypes = {
  initialLinks: LinkItem[]
  setLinks: (links: LinkItem[]) => void
}

export const Search: React.FC<PropTypes> = ({ initialLinks, setLinks }) => {
  const onSearch = (value: string) => {
    setLinks(initialLinks.filter((link: LinkItem) => link.title.includes(value)))
  }

  return (
    <div className='flex justify-center'>
      <input
        placeholder='جستجو...'
        className='border rounded-lg mb-5 mt-10 p-2 w-96 px-5'
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  )
}

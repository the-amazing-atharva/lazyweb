const logo = '/assets/Logo.png'
import {SearchBar, ProfileIcon} from '../../'
import {Grid} from 'react-feather'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="w-[100vw] border-b border-[#5e5f60] flex justify-between items-center h-[70px] bg-[#202124]">
      <div className='flex items-center'>
        <div className="bg-white w-[140px] ml-[20px]">
          <img src={logo} className='h-[45px]' />
        </div>
        <SearchBar/>
      </div>
      <div className='flex gap-[1rem] mr-[1rem] items-center'>
        <div className='h-[2.5rem] w-[2px] bg-[#5e5f60]'/>
        <Grid className='text-[#6c6c6c] cursor-pointer'/>
        <ProfileIcon className='mr-[1rem] cursor-pointer' address='Dishant Sharma'/>
      </div>
    </div>
  )
}

export default NavBar
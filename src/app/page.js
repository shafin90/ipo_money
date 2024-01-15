import Menu from './components/Menu/Menu'
import IPO from './components/IPO/IPO'
import Image from 'next/image'
import logo from '../../public/img/logo.PNG'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import NavbarForSmallDevice from './components/NavbarForSmallDevice/NavbarForSmallDevice'

export default function Home() {
  return (
    <div className=' flex justify-between items-start ' >

      {/* Menu= left part of the screen========================================================= */}
      <div className='side_menu w-3/12 h-screen sticky top-0 z-50'>
        {/* logo =============*/}
        <div className='flex flex-col justify-center items-center h-2/6 bg-blue-50'>
          <Image
            src={logo}
            width={120}
            height={120}
            quality={100}
            loading='lazy'
          ></Image>
          <h1 className='text-center font-semibold'>IPO Money</h1>
        </div>

        {/* menu========== */}
        <div className=' h-4/6 bg-blue-50'>
          <Menu></Menu>
        </div>
      </div>

      {/*IPO details= right part of the screen =============================================== */}
      <div className='lg:w-9/12 w-full'>

        {/* navigation component for small device */}
        <NavbarForSmallDevice></NavbarForSmallDevice>

        {/* Navigation component for large device */}
        <CustomNavbar></CustomNavbar>

        {/* Section under the navbar */}
        <IPO></IPO>
      </div>

    </div>
  )
}

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router'

const CommonLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main content wrapper with proper padding to account for fixed header */}
      <main className="flex-1 pt-[106px]">
        {/* 106px accounts for: 40px top bar + 66px nav bar (on desktop when not scrolled) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CommonLayout
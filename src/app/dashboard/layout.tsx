import SideBar from '../components/SideBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className='flex dark:bg-black'>
        <SideBar />
        <div>{children}</div>
      </div>
    </section>
  )
}
import SideBar from '../components/SideBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SideBar />
      {children}
    </section>
  )
}
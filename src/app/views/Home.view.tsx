import usePageTitle from "../../Core/Hooks/usePageTitle"
import DefaultLayout from "../../Layout/Default/Default.layout"

export default function Home() {

usePageTitle('Home')

  return <DefaultLayout>
  <h1>Home</h1>
  </DefaultLayout>
}

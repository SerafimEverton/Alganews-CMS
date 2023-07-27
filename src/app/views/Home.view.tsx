import usePageTitle from "../../Core/Hooks/usePageTitle"
import DefaultLayout from "../../Layout/Default/Default.layout"
import PostList from "../components/Features/PostList.features"
import UserEarnings from "../components/Features/UserEarnings.feature"
import UserPerformance from "../components/Features/UserPerformance.features"
import UserTopTags from "../components/Features/UserTopTags.feature"

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <div style={
      { display: 'grid', gridTemplateColumns: '1fr 1fr', 
      alignItems: 'center', 
      gap: '32px' }}>
        
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}

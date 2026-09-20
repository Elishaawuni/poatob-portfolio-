import Hero from '../sections/Hero'
import About from '../sections/About'
import Research from '../sections/Research'
import Qualifications from '../sections/Qualifications'
import Employment from '../sections/Employment'
import Teaching from '../sections/Teaching'
import Positions from '../sections/Positions'
import Memberships from '../sections/Memberships'
import Grants from '../sections/Grants'
import Projects from '../sections/Projects'
import Publications from '../sections/Publications'
import Awards from '../sections/Awards'
import Insights from '../sections/Insights'
import CV from '../sections/CV'
import Consultancy from '../sections/Consultancy'
import Contact from '../sections/Contact'
import KenteDivider from '../components/KenteDivider'

export default function Home({ data }) {
  return (
    <>
      <Hero settings={data.settings} />
      <About settings={data.settings} />
      <Research settings={data.settings} specializations={data.specializations} />
      <Qualifications education={data.education} />
      <Employment employment={data.employment} />
      <Teaching teaching={data.teaching} />
      <Positions positions={data.positions} />
      <Memberships memberships={data.memberships} />
      <Grants grants={data.grants} />
      <Projects projects={data.projects} />
      <Publications publications={data.publications} />
      <Awards awards={data.awards} />
      <Insights posts={data.posts} />
      <CV settings={data.settings} />
      <Consultancy services={data.consultancyServices} settings={data.settings} />
      <KenteDivider thin />
      <Contact settings={data.settings} />
    </>
  )
}

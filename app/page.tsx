import Points from "@/components/Points"
import Slider from "@/components/Slider"
import Learning from "@/components/Learning"
import Question from "@/components/Question"
import Monitoring from "@/components/Monitoring"
import Testimonials from "@/components/Testimonials"
import AdvertisementSection from "@/components/AdvertisementSection"

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Slider/>
      <AdvertisementSection/>
      <Monitoring/>
      <Testimonials/>
      <Points/>
      <Learning/>
      <Question/>
    </section>
  )
}
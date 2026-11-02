import Navbar from '../components/Navbar'
import { useState } from "react"
import RateLimitedUi from '../components/RateLimitedUi'
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUi setRate = {setIsRateLimited} /> }
    </div>
  )
}

export default HomePage
import Navbar from '../components/Navbar'
import { useState , useEffect} from "react"
import RateLimitedUi from '../components/RateLimitedUi'
import axios from 'axios'
import { toast } from 'react-hot-toast'
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes')
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
        toast.success('Notes fetched successfully!')
      } catch (error) {
        if (error.response.status === 429) {
          setIsRateLimited(true)
        }
        else {
          toast.error('An error occurred while fetching notes. Please try again later.')
        }
      }finally {
        setLoading(false)
      }
    }
    fetchNotes()
    },[])
  return (
    <div className="min-h-screen">
      <Navbar />
      {loading ? <div className="text-center mt-10">Loading...</div> : isRateLimited ? <RateLimitedUi /> : <div>
       {notes.map((note) => (<div key={note._id} className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">{note.title}</h2>
          <span className="text-gray-600 mb-4">{note.content}</span> 
      </div>))}
    </div>}
    </div>
  )
}
export default HomePage
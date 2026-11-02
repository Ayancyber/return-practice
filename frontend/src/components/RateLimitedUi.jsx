import { Zap } from 'lucide-react'
const RateLimitedUi = () => {
  return (
    <div className = "flex items-center space-x-3 bg-blue-100 border border-blue-300 rounded-lg p-4 max-w-4xl mx-auto mt-10">
        <div className="flex items-center justify-center w-14 h-14 bg-blue-200 rounded-full ">
            <Zap color="#2563EB" size={34}/>
        </div>
        <div className="flex flex-col">
            <h2 className="text-lg font-bold text-blue-600">Rate Limit Reached</h2>
            <span className= "text-lg text-blue-500">You have made too many requests.Please try again later.</span>
            <span className="text-sm text-blue-300">Try again in a few seconds for the best expirience</span>
        </div>

    </div>
  )
}

export default RateLimitedUi
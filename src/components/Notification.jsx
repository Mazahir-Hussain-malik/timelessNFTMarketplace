import { Bell, MessageSquare, Heart, DollarSign, User, X } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: 'message',
    content: 'You have a new message from Alice',
    time: '2 min ago',
    icon: MessageSquare,
  },
  {
    id: 2,
    type: 'like',
    content: 'Bob liked your NFT "Cosmic Dreamscape #42"',
    time: '15 min ago',
    icon: Heart,
  },
  {
    id: 3,
    type: 'sale',
    content: 'Your NFT "Abstract Harmony" sold for 0.5 ETH',
    time: '1 hour ago',
    icon: DollarSign,
  },
  {
    id: 4,
    type: 'follow',
    content: 'Charlie started following you',
    time: '3 hours ago',
    icon: User,
  },
]

 function Notification() {


    
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-black/80 backdrop-blur-xl to-[#e329708f] text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-red-600 font-semibold mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Notifications
          </div>
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div key={notification.id} className="py-4 flex items-center">
                <div className={`flex-shrink-0 rounded-full p-2 `}>
                  <notification.icon className="w-5 h-5 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-200">{notification.content}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <button className="ml-4 text-gray-400 hover:text-gray-500">
                  <X className="w-5 h-5" />
                  <span className="sr-only">Dismiss</span>
                </button>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Notification;

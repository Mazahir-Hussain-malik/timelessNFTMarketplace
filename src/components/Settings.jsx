import { useState } from 'react'
import { Bell, Moon, Sun, Globe, Lock, CreditCard, User, ChevronDown } from 'lucide-react'

function Settings() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const [currency, setCurrency] = useState('ETH')

  


  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-black/80 backdrop-blur-xl to-[#e329708f] rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      
     Dashboard Settings</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account</h2>
            <div className="flex items-center p-4  bg-[#e329708f] rounded-lg">
              <User className="w-6 h-6 text-gray-500 dark:text-gray-400 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Appearance</h2>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                  darkMode ? 'bg-[#e329708f]' : 'bg-black/60'
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  } rounded-full bg-white shadow-lg`}
                />
                {darkMode ? (
                  <Moon className="absolute right-1 w-4 h-4 text-indigo-100" />
                ) : (
                  <Sun className="absolute left-1 w-4 h-4 text-yellow-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Notifications</h2>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Enable Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                  notifications ? 'bg-[#e329708f]' : 'bg-black/60'
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  } rounded-full bg-white shadow-lg`}
                />
                <Bell className={`absolute w-4 h-4 ${notifications ? 'right-1 text-indigo-100' : 'left-1 text-gray-400'}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Language & Region</h2>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-[#e329708f]  border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#e329708f] focus:border-gray-500"
              >
                <option value={"en"}>English</option>
                <option value={"es"}>Spanish</option>
                <option value={"fr"}>French</option>
                <option value={"de"}>German</option>
                <option value={"ur"}>Urdu</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Currency</h2>
            <div className="relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="block appearance-none w-full bg-[#e329708f]  border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#e329708f] focus:border-gray-500"
              >
                <option>ETH</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

        

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Methods</h2>
            <button className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              <CreditCard className="w-5 h-5 mr-2" />
              Manage Payment Methods
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  )


}


export default Settings;
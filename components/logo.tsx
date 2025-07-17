import { Building2 } from "lucide-react"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Zainab Consultancy</span>
        <span className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Ltd</span>
      </div>
    </div>
  )
}

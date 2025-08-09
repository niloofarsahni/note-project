import { useState } from "react"

const Footer = () => {
    const [date, setDate] = useState(new Date())
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="bg-gray-400 ">
                <h3 className="p-2 text-yellow-100 text-center">{date.toDateString()}</h3>
            </div>
        </footer>

    )
}
export default Footer
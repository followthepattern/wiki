import FPIcon from "./FPIcon";

export default function Logo() {
    return (
        <div className="flex space-x-2">
            <FPIcon className="w-6 h-6 text-blue-600" />
            <p className="font-bold">WIKI</p>
        </div>
    )
}
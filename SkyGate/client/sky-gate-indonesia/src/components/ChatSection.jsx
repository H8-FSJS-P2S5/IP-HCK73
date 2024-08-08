const ChatSection = () => {
    return (
        <div className="max-w-sm space-y-3">
            <textarea
                className="font-outfit border py-3 px-4 block w-[20vw] h-[25vw] bg-blue-50 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none overflow-y-auto resize-none"
                placeholder="Hi! I'm FLAI, your AI assistant. Looking for activities, hotels, or anything else near the airport? Ask me!"
                rows="4"/>
        </div>

    )
}

export default ChatSection
const ChatSection = ({chatbot, question, setQuestion}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            chatbot()}} className="max-w-sm space-y-3">
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)}
                className="font-outfit border py-3 px-4 block w-[20vw] h-[22vw] bg-blue-50 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none overflow-y-auto resize-none"
                placeholder="Hi! I'm FLAI, your AI assistant. Looking for activities, hotels, or anything else near the airport? Ask me!"
                rows="4"/>
            <button type="submit" className="font-outfit text-white flex justify-center items-center w-20 h-8 bg-blue-400 rounded-lg hover:bg-blue-300 focus:bg-blue-500 ">
                Let's Go!
            </button>
        </form>

    )
}

export default ChatSection
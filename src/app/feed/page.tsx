import JournalFeed from "@/components/JournalFeed";

export default function FeedPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-40 pb-12 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Academic Journal Portal
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover and access peer-reviewed research across multiple disciplines.
                    </p>
                </header>

                <JournalFeed />
            </div>
        </div>
    );
}

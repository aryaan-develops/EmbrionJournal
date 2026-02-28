import AdminJournalList from "@/components/AdminJournalList";

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-40 pb-12 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex justify-between items-center bg-white p-8 rounded-2xl shadow-sm">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500 text-sm">Review and manage recent journal submissions</p>
                    </div>
                    <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-blue-700 font-semibold">Administrator Panel</span>
                    </div>
                </header>

                <AdminJournalList />
            </div>
        </div>
    );
}

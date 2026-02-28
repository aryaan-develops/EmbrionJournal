"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Check, X, Eye, FileText } from "lucide-react";

export default function AdminJournalList() {
    const [journals, setJournals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPending = async () => {
        try {
            const res = await fetch("/api/admin/journals");
            const data = await res.json();
            setJournals(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPending();
    }, []);

    const updateStatus = async (id: string, status: "Approved" | "Rejected") => {
        try {
            const res = await fetch(`/api/admin/journals/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });

            if (!res.ok) throw new Error("Update failed");

            toast.success(`Journal ${status}`);
            setJournals((prev) => prev.filter((j: any) => j._id !== id));
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    if (loading) return <div>Loading submissions...</div>;

    return (
        <div className="grid gap-4">
            {journals.length === 0 ? (
                <Card className="p-12 text-center text-gray-400">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>No pending submissions at the moment.</p>
                </Card>
            ) : (
                journals.map((journal: any) => (
                    <Card key={journal._id} className="overflow-hidden border-none shadow-sm">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 p-6">
                                <CardHeader className="p-0 mb-2">
                                    <CardTitle className="text-xl">{journal.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{journal.abstract}</p>
                                    <div className="flex gap-2 text-xs text-gray-400">
                                        <span>Submitted by: {journal.submittedBy.name}</span>
                                        <span>•</span>
                                        <span>{new Date(journal.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </CardContent>
                            </div>
                            <div className="bg-gray-50 p-6 flex items-center gap-2 border-l">
                                <Button variant="outline" size="sm" asChild>
                                    <a href={journal.fileUrl} target="_blank" rel="noopener noreferrer">
                                        <Eye className="w-4 h-4 mr-2" /> View
                                    </a>
                                </Button>
                                <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => updateStatus(journal._id, "Approved")}>
                                    <Check className="w-4 h-4 mr-2" /> Approve
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => updateStatus(journal._id, "Rejected")}>
                                    <X className="w-4 h-4 mr-2" /> Reject
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))
            )}
        </div>
    );
}

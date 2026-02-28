import SubmissionForm from "@/components/SubmissionForm";

export default function SubmitPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-40 pb-16 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-indigo-600 font-semibold tracking-wide uppercase">For Authors</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Journal Submission
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Submit your research for peer review and publication in our academic network.
                    </p>
                </div>

                <SubmissionForm />
            </div>
        </div>
    );
}

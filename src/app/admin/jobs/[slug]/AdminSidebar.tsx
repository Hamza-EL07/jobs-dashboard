"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import { Job } from "@prisma/client";
import { useFormState } from "react-dom";
import { approveSubmission, deleteJob } from "./actions";

interface AdminSidebarProps {
  job: Job;
}
export default function AdminSidebar({ job }: AdminSidebarProps) {
  return (
    <aside className="flex w-52 flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <p className=" text-center font-semibold text-green-500">Approved</p>
      ) : (
        <ApproveSubmissionButton jobId={job.id} />
        )}
        <DeleteJobButton jobId={job.id} />
    </aside>
  );
}

interface AdminJobPageProps {
  jobId: number;
}

function ApproveSubmissionButton({ jobId }: AdminJobPageProps) {
  const [formState, formAction] = useFormState(approveSubmission, undefined);
  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId}></input>
      <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600">
        Approve
      </FormSubmitButton>
      {formState?.error && (
        <p className="text-start text-xs text-red-500">{formState.error}</p>
      )}
    </form>
  );
}

function DeleteJobButton({ jobId }: AdminJobPageProps) {
  const [formState, formAction] = useFormState(deleteJob, undefined);
  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId}></input>
      <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitButton>
      {formState?.error && (
        <p className="text-start text-xs text-red-500">{formState.error}</p>
      )}
    </form>
  );
}

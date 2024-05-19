import { Suspense } from "react"
import EditPrompt from "./EditPrompt";



const EditPromptWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  )
}

export default EditPromptWrapper;

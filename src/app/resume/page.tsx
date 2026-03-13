'use client'
function Page() {
  return (
    <div className="flex justify-center bg-transparent py-10">
  <iframe
    src="/resume.pdf#toolbar=0"
    className="w-[800px] h-[1000px] shadow-xl rounded-lg"
  />
</div>
  )
}

export default Page
'use client'
 
interface Props {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset }:Props) {
  return (
    <html>
      <body>
        <div className="m-auto mt-40">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}
export async function POST() {
    const res = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }
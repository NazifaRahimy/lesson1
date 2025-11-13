let messages: { id: string; name: string; email: string; message: string }[] = []

export async function GET() {
  return Response.json(messages)
}

export async function POST(request: Request) {
  const data = await request.json()
  
  
  const newMessage = {
    id: String(messages.length + 1),
    name: data.name,
    email: data.email,
    message: data.message,
  }

  messages.push(newMessage)

  return Response.json(newMessage, { status: 201 })
}

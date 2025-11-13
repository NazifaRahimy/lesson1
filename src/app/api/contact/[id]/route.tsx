let messages: { id: string; name: string; email: string; message: string }[] = []

export async function GET({params}: {params: {id: string}}){
    const {id} = await params
   const message = await messages.find((message)=> message.id === id);
   return Response.json(message)
}


export async function DELETE(request: Request){
    const {id} = await request.json()
    const index = messages.findIndex((message)=> message.id === id)\
    const deletMessage = messages[index]
    messages.splice(index, 1);
    return Response.json(deletMessage)
}
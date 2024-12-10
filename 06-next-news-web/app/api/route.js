export function GET(request) {
  console.log(request)

  // return Response.json({ oke: "woe" })
  return new Response("Hello!")
}

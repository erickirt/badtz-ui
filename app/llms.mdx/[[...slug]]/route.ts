import { notFound } from "next/navigation"
import { NextResponse, type NextRequest } from "next/server"

import { getLLMText } from "@/lib/get-llm-text"
import { source } from "@/lib/source"

export const revalidate = false

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params
  const page = source.getPage(slug)
  if (!page) notFound()

  return new NextResponse(await getLLMText(page))
}

export function generateStaticParams() {
  return source.generateParams()
}

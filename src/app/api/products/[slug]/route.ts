import data from '../data.json'

import { z } from 'zod'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  console.log(params.slug)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  // const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(product)
}

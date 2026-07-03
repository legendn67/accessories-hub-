import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'

export const projectId = '7ufnlpau'
export const dataset = 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Ensures fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

export type Category = {
  _id: string
  name: string
  slug: { current: string }
  icon?: string
  image?: any
}

export type Product = {
  _id: string
  name: string
  slug: { current: string }
  category: Category
  price: number
  salePrice?: number
  images?: any[]
  description?: string
  whatsappNumber?: string
  inStock: boolean
  featured: boolean
}

export function useSanityProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [fetchedProducts, fetchedCategories] = await Promise.all([
          client.fetch<Product[]>(`*[_type == "product"]{
            _id,
            name,
            slug,
            category->{
              _id,
              name,
              slug,
              icon,
              image
            },
            price,
            salePrice,
            images,
            description,
            whatsappNumber,
            inStock,
            featured
          }`),
          client.fetch<Category[]>(`*[_type == "category"]{
            _id,
            name,
            slug,
            icon,
            image
          }`)
        ])
        setProducts(fetchedProducts)
        setCategories(fetchedCategories)
      } catch (err: any) {
        console.warn("Sanity fetch warning:", err.message || err);
        setError(err.message || "Failed to fetch from Sanity");
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { products, categories, loading, error }
}

export function useSanityProduct(slugOrId: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slugOrId) {
      setLoading(false)
      return
    }

    async function fetchProduct() {
      try {
        const p = await client.fetch<Product | null>(`*[_type == "product" && (slug.current == $id || _id == $id)][0]{
          _id,
          name,
          slug,
          category->{
            _id,
            name,
            slug,
            icon,
            image
          },
          price,
          salePrice,
          images,
          description,
          whatsappNumber,
          inStock,
          featured
        }`, { id: slugOrId })
        setProduct(p)
      } catch (err: any) {
        console.warn("Sanity fetch warning:", err.message || err);
        setError(err.message || "Failed to fetch from Sanity");
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [slugOrId])

  return { product, loading, error }
}

export interface Authors {
  id: string
  name: string
  image: string
  bio: string
}

export interface About {
  title: string
  image: object
  slug: string
}

export interface AboutProps {
  data: [
    {
      attributes: {
        title: string,
        slug: string,
        hero_image: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
    }
  ]
}

// Define project type
export type Project = {
  id: number
  title: string
  description: string
  imageUrl: string
  link: string
  technologies: string[]
}

export type SelectScreenPayload = {
  screen: string
  setScreen: React.Dispatch<React.SetStateAction<string>>
  data: Record<string, unknown>
}

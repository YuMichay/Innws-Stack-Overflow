export interface EditPostProps {
  id: number, 
  language: string, 
  code: string
}

export type EditPostResponse = { updatedCount: number };
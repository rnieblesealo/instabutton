import { createClient } from "@supabase/supabase-js"

const supaUrl = import.meta.env.VITE_SUPABASE_URL
const supaAPIKey = import.meta.env.VITE_SUPABASE_API_KEY
const supabase = createClient(supaUrl, supaAPIKey)

// WARNING: These functions assume that the table in Supabase already has both of us created as rows!
// We could make it better but eh :D

export async function getScoreFromDB(fromName: string) {
  const { data, error } = await supabase
    .from("scores")
    .select("*")
    .eq("name", fromName)
    .single()
  if (error) {
    console.error(`Failed to fetch score for ${fromName}:`, error)
    return -1
  } else {
    return data.score
  }
}

export async function setScoreInDB(forName: string, newScore: number) {
  const { error } = await supabase
    .from("scores")
    .update({ score: newScore })
    .eq("name", forName)
  if (error) {
    console.error(`Failed to fetch score for ${forName}:`, error)
    return false
  } else {
    return true
  }
}
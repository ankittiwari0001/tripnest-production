export interface AIMessage {

  role:
    | "user"
    | "assistant";

  content: string;
}

export type AIIntent =

  | "travel"

  | "translation"

  | "budget"

  | "weather"

  | "itinerary"

  | "emergency"

  | "general";

  

import {
  NextRequest,
  NextResponse,
} from "next/server";

import { detectIntent }
from "@/lib/ai/detectIntent";

import { translateText }
from "@/lib/ai/translator";

export async function POST(
  req: NextRequest
) {

  try {

    const body =
      await req.json();

    const {
      message,
    } = body;

    const intent =
      detectIntent(message);

    /* TRANSLATION */

    if (
      intent ===
      "translation"
    ) {

      const translated =
        translateText(
          message
        );

      return NextResponse.json({

        success: true,

        intent,

        response:
          translated,
      });
    }

    /* BUDGET */

    if (
      intent ===
      "budget"
    ) {

      return NextResponse.json({

        success: true,

        intent,

        response:
          "For ₹10,000 budget, Goa is recommended with budget hotels and local food.",
      });
    }

    /* WEATHER */

    if (
      intent ===
      "weather"
    ) {

      return NextResponse.json({

        success: true,

        intent,

        response:
          "Kerala may experience rain this week. Carry light rainwear.",
      });
    }

    /* DEFAULT */

    return NextResponse.json({

      success: true,

      intent,

      response:
        "TRIPNEST AI recommends exploring nearby attractions and hotels.",
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,

        message:
          "AI failed",
      },

      {
        status: 500,
      }
    );

  }
}
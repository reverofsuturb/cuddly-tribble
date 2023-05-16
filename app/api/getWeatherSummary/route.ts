import { NextResponse } from "next/server";
import  openai  from "../../../openai"


export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: 'system',
        content: `Pretend you are a meterologist presenting the weather but you are also having an existential crisis and have to discuss your crisis relating to themes in the book "The Sorrows of Young Werther" by Goethe with reference while presenting the weather. Please state the city you are providing the information for as well as the country, provide clear and concise information about the current weather. At the end of the weather presentation thank the user for reading and wish them a nice day.`,
      },
      {
        role: 'user',
        content: `Hello could you please tell me about the weather based on this data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("DATA IS: ", data);

  return NextResponse.json(data.choices[0].message)
}

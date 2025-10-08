
import DBConection from "@/dbConection";
import landingModels from "@/models/landing-models";

export async function POST(request) {
    await DBConection()
  try {
      const {title, subtext} = await request.json()
      let landingContent = await landingModels.findOneAndUpdate(
        {}, 
        {title, subtext},
         { new: true, upsert: true }
      )
        return new Response(JSON.stringify(landingContent), { status: 200 });
  } 
  catch (error) {
    console.log(error, "landing route error");
  }
}



//GET
export async function GET() {
  await DBConection()
  try {
    const landingpage = await landingModels.find();
    return new Response(JSON.stringify(landingpage), { status: 200 });
  } catch (error) {
    console.log(error, "responce error from landingpage");
    return new Response(json({ message: "landing page ishu", status: 500 }));
  }
}
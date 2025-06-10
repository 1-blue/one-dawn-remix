import { type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "@one-dawn/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@one-dawn/ui";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const villagers = await db.animalCrossingVillager.findMany({
      orderBy: { createdAt: "desc" },
    });

    return {
      villagers,
    };
  } catch (error) {
    console.error("Database error:", error);
    throw new Response("데이터베이스 연결 오류", { status: 500 });
  }
}

const DB: React.FC = () => {
  const { villagers } = useLoaderData<typeof loader>();

  return (
    <ul className="grid grid-cols-4 gap-4">
      {villagers.map((villager) => (
        <Card key={villager.id}>
          <CardHeader>
            <CardTitle>{villager.name_kr}</CardTitle>
            <CardDescription>{villager.quote_kr}</CardDescription>
            <CardContent>
              <img
                src={villager.image_url}
                alt={villager.name_kr}
                className="w-full h-full object-cover"
              />
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                <span>{villager.gender_kr}</span>
                <span>{villager.species_kr}</span>
                <span>{villager.personality_kr}</span>
                <span>{villager.sign_kr}</span>
                <span>{villager.birthday_month_kr}</span>
                <span>{villager.birthday_day}일</span>
                <span>{villager.debut_kr}</span>
                <Link to={villager.url}>{villager.url}</Link>
              </div>
            </CardFooter>
          </CardHeader>
        </Card>
      ))}
    </ul>
  );
};

export default DB;

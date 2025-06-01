import { type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { db } from "@one-dawn/db";

// 서버에서 실행되는 loader 함수
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // 두 스키마의 강아지 데이터 불러오기
    const [publicDogs, templateDogs] = await Promise.all([
      db.templateOneDog.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
      db.templateTwoDog.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
    ]);

    // 통계 데이터
    const stats = {
      totalTemplateOneDogs: await db.templateOneDog.count(),
      totalTemplateTwoDogs: await db.templateTwoDog.count(),
      totalDogs:
        (await db.templateOneDog.count()) + (await db.templateTwoDog.count()),
    };

    // Single Fetch에서는 raw 객체를 직접 반환
    return {
      publicDogs,
      templateDogs,
      stats,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Database error:", error);
    throw new Response("데이터베이스 연결 오류", { status: 500 });
  }
}

const DB: React.FC = () => {
  const { publicDogs, templateDogs, stats, timestamp } =
    useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">강아지 데이터베이스 대시보드 🐕</h1>
        <div className="text-sm text-gray-500">
          마지막 업데이트: {new Date(timestamp).toLocaleString("ko-KR")}
        </div>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border">
          <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Public 스키마 강아지
          </h3>
          <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            {stats.totalTemplateOneDogs}
          </p>
        </div>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border">
          <h3 className="text-sm font-medium text-pink-600 dark:text-pink-400">
            Template 스키마 강아지
          </h3>
          <p className="text-2xl font-bold text-pink-900 dark:text-pink-100">
            {stats.totalTemplateTwoDogs}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border">
          <h3 className="text-sm font-medium text-green-600 dark:text-green-400">
            총 강아지 수
          </h3>
          <p className="text-2xl font-bold text-green-900 dark:text-green-100">
            {stats.totalDogs}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Public 스키마 강아지 목록 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Public 스키마 강아지 🐕</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg border overflow-hidden">
            {publicDogs.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Public 스키마에 강아지가 없습니다. 시드 데이터를 실행해보세요.
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {publicDogs.map((dog) => (
                  <div
                    key={dog.id}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🐕</div>
                        <div>
                          <h3 className="font-medium">{dog.name}</h3>
                          <p className="text-sm text-blue-500">Public 스키마</p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(dog.createdAt).toLocaleDateString("ko-KR")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Template 스키마 강아지 목록 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Template 스키마 강아지 🐶</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg border overflow-hidden">
            {templateDogs.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Template 스키마에 강아지가 없습니다. 시드 데이터를 실행해보세요.
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {templateDogs.map((dog) => (
                  <div
                    key={dog.id}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🐶</div>
                        <div>
                          <h3 className="font-medium">{dog.name}</h3>
                          <p className="text-sm text-pink-500">
                            Template 스키마
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(dog.createdAt).toLocaleDateString("ko-KR")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex flex-wrap gap-4">
        <Link
          to="/db/public"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Public 강아지 관리
        </Link>
        <Link
          to="/db/template"
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Template 강아지 관리
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          새로고침
        </button>
      </div>

      {/* 개발자 정보 */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="font-medium mb-2">개발자 정보</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p>• 데이터베이스: Neon PostgreSQL</p>
          <p>• ORM: Prisma (멀티스키마 지원)</p>
          <p>• Public 스키마: public_dogs</p>
          <p>• Template 스키마: template_dogs</p>
          <p>
            • 시드 데이터 실행:{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              npm run db:seed
            </code>
          </p>
          <p>
            • Prisma Studio:{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              npm run db:studio
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DB;

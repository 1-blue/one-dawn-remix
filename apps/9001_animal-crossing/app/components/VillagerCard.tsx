import type { AnimalCrossingVillager } from "@one-dawn/db";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  cn,
} from "@one-dawn/ui";
import {
  favColorMap,
  favStyleMap,
  genderMap,
  personalityMap,
} from "#/libs/mapping";

interface IProps {
  villager: Omit<AnimalCrossingVillager, "createdAt" | "updatedAt">;
}

const VillagerCard: React.FC<IProps> = ({ villager }) => {
  return (
    <Card className="h-full hover:shadow-2xl border-0 shadow-lg bg-white/80">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-16 h-16 ring-2 ring-primary">
              <AvatarImage
                src={villager.icon_url}
                alt={villager.name_kr || villager.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold">
                {(villager.name_kr || villager.name).charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {villager.name_kr || villager.name}
              </h3>
              <p className="text-sm text-gray-600">
                {villager.species_kr || villager.species}
              </p>
            </div>
          </div>

          {/* 성별 배지 */}
          <Badge
            className={cn(
              "text-xs",
              genderMap[villager.gender_kr || villager.gender]
            )}
          >
            {villager.gender_kr || villager.gender}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 성격 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">성격</span>
          <Badge
            className={cn(
              "text-xs",
              personalityMap[villager.personality_kr || villager.personality]
            )}
          >
            {villager.personality_kr || villager.personality}
          </Badge>
        </div>

        {/* 생일 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">생일</span>
          <span className="text-sm font-medium text-gray-900">
            {villager.birthday_month_kr || villager.birthday_month}{" "}
            {villager.birthday_day}일
          </span>
        </div>

        {/* 별자리 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">별자리</span>
          <Badge
            variant="outline"
            className="text-xs bg-gray-100 text-gray-900"
          >
            {villager.sign_kr || villager.sign}
          </Badge>
        </div>

        {/* 좋아하는 색상 */}
        <div>
          <span className="text-sm text-gray-600 block mb-2">
            좋아하는 색상
          </span>
          <div className="flex flex-wrap gap-1">
            {(villager.fav_colors_kr || villager.fav_colors || []).map(
              (color: string, index: number) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform",
                        favColorMap[color]
                      )}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{color}</p>
                  </TooltipContent>
                </Tooltip>
              )
            )}
          </div>
        </div>

        {/* 좋아하는 스타일 */}
        <div>
          <span className="text-sm text-gray-600 block mb-2">
            좋아하는 스타일
          </span>
          <div className="flex flex-wrap gap-1">
            {(villager.fav_styles_kr || villager.fav_styles || []).map(
              (style: string, index: number) => (
                <Badge
                  key={index}
                  className={cn("text-xs", favStyleMap[style])}
                >
                  {style}
                </Badge>
              )
            )}
          </div>
        </div>

        {/* 명언 */}
        {(villager.quote_kr || villager.quote) && (
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-600 italic leading-relaxed">
              "{villager.quote_kr || villager.quote}"
            </p>
          </div>
        )}

        {/* 말버릇 */}
        {(villager.catchphrase_kr || villager.catchphrase) && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">말버릇</span>
            <Badge variant="secondary" className="text-xs">
              {villager.catchphrase_kr || villager.catchphrase}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VillagerCard;
